import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { backendClient } from "@/sanity/lib";
import catchError from "@/lib/catchError";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error("Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local");
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Verify payload with headers using catchError
  const [verificationError, evt] = await catchError<WebhookEvent, typeof Error>(
    Promise.resolve(
      wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent
    ),
    [Error]
  );

  if (verificationError) {
    console.error("Error: Could not verify webhook:", verificationError);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    // Create User in database using catchError
    const [createError] = await catchError(
      backendClient.create({
        _type: "user",
        clerkId: id,
        name: `${payload.data.first_name} ${payload.data.last_name}`,
        email: payload.data.email_addresses[0].email_address,
      }),
      [Error]
    );

    if (createError) {
      console.error("Error: Failed to create user in database:", createError);
      return new Response("Error: Database operation failed", {
        status: 500,
      });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
