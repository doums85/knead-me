import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="h-[95vh] flex justify-center items-center">
      <SignUp />
    </main>
  );
}
