"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "../card";
import { Button } from "../button";

export default function ProfessionalCard({ name, address, image, services }: any) {
  return (
    <Card className="overflow-hidden px-8 md:px-4">
      <CardHeader className="px-0 space-y-1 pb-4 ">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{address}</p>
      </CardHeader>
      <div className="relative aspect-[4/3] w-full">
        <img
          src={image || "/placeholder.svg"}
          alt="Accessoires de massage"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {Array.isArray(services) &&
            services.map((service, index) => (
              <div key={index} className="grid grid-cols-[1fr_0.5fr_0.5fr] border-b pb-2">
                <p className="font-medium">{service.name}</p>

                <div className="">
                  <span className="font-medium">{service.price} €</span>
                  <p className="text-sm text-muted-foreground">{service.time}</p>
                </div>
                <Button variant={"darker"}>Réserver</Button>
              </div>
            ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-4">
        <Link href="#" className="text-sm text-muted-foreground hover:underline">
          Voir profile →
        </Link>
        <Button variant="secondary" className="bg-black text-white hover:bg-gray-800">
          Voir tous les prix
        </Button>
      </CardFooter>
    </Card>
  );
}
