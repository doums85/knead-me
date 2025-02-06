import { Suspense } from "react";
import getHome from "@/sanity/queries/getHome";
import { Button, ImagesSlider, Skeleton } from "@/components/ui";
import { FadeIn } from "@/components/animation";
import SearchSection from "./_section/search";

export default async function Home() {
  const { banner_section } = await getHome();

  return (
    <main>
      {/* Banner Section */}
      <Suspense fallback={<Skeleton className="h-[40rem] w-full" />}>
        <ImagesSlider className="h-[40rem]" images={banner_section.images}>
          <FadeIn className="z-50 flex flex-col justify-center items-center">
            <p className="font-bold text-xl md:text-6xl text-center text-gradient py-4">
              {banner_section.title}
            </p>
            <Button className="mt-4">
              <span>Réserver Maintenant →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </Button>
          </FadeIn>
        </ImagesSlider>
      </Suspense>

      {/* Search Section */}
      <SearchSection />
    </main>
  );
}
