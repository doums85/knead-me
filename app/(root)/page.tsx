import { Suspense } from "react";
import getHome from "@/sanity/queries/getHome";
import { Button, ImagesSlider, Skeleton } from "@/components/ui";
import { FadeIn } from "@/components/animation";
import SearchSection from "./_section/search";
import { ProfessionalCard } from "@/components/ui/custom-card";
import { Container, TestimonialsSection } from "@/components/shared";
import CallToActionSection from "./_section/call-to-action";

const professionals = [
  {
    name: "Zen Relaxation",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "123 Avenue de la Paix, 75000 Paris, France",
    services: [
      { name: "Massage relaxant", time: "60 minutes", price: 70 },
      { name: "Massage suédois", time: "90 minutes", price: 90 },
    ],
    rating: 4.5,
    reviewsCount: 150,
  },
  {
    name: "Espace Bien-Être",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "456 Rue du Bienfait, 31000 Toulouse, France",
    services: [
      { name: "Massage deep tissue", time: "60 minutes", price: 80 },
      { name: "Massage du dos", time: "30 minutes", price: 40 },
    ],
    rating: 4.7,
    reviewsCount: 200,
  },
  {
    name: "Harmonie Corps",
    image:
      "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "789 Allée du Calme, 06000 Nice, France",
    services: [
      { name: "Massage aux pierres chaudes", time: "60 minutes", price: 85 },
      { name: "Réflexologie", time: "45 minutes", price: 50 },
    ],
    rating: 4.2,
    reviewsCount: 90,
  },
  {
    name: "Sérénité Urbaine",
    image:
      "https://images.unsplash.com/photo-1598555748505-ccca0d9b9f7b?q=80&w=2994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "101 Rue de l'Harmonie, 13000 Marseille, France",
    services: [
      { name: "Massage thaï", time: "90 minutes", price: 95 },
      { name: "Massage cranien", time: "45 minutes", price: 55 },
    ],
    rating: 4.8,
    reviewsCount: 250,
  },
  {
    name: "Oasis de Paix",
    image:
      "https://images.unsplash.com/photo-1630835425197-50feeba99ecd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "202 Boulevard de la Détente, 69000 Lyon, France",
    services: [
      { name: "Massage ayurvédique", time: "90 minutes", price: 100 },
      { name: "Massage des pieds", time: "30 minutes", price: 35 },
    ],
    rating: 4.0,
    reviewsCount: 70,
  },
  {
    name: "Refuge du Silence",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "303 Chemin du Repos, 33000 Bordeaux, France",
    services: [
      { name: "Massage Shiatsu", time: "60 minutes", price: 75 },
      { name: "Massage sportif", time: "60 minutes", price: 80 },
    ],
    rating: 4.3,
    reviewsCount: 120,
  },
  {
    name: "Pause Zen",
    image:
      "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "404 Voie de la Tranquillité, 44000 Nantes, France",
    services: [
      { name: "Massage aromathérapie", time: "60 minutes", price: 70 },
      { name: "Massage facial", time: "45 minutes", price: 65 },
    ],
    rating: 4.6,
    reviewsCount: 180,
  },
  {
    name: "Lueur Intérieure",
    image:
      "https://images.unsplash.com/photo-1545463913-5083aa7359a6?q=80&w=2822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "505 Avenue du Zen, 67000 Strasbourg, France",
    services: [
      { name: "Massage Lomi Lomi", time: "90 minutes", price: 110 },
      { name: "Massage du cuir chevelu", time: "30 minutes", price: 40 },
    ],
    rating: 4.4,
    reviewsCount: 140,
  },
];

const testimonials = [
  {
    author: {
      name: "Sophie Martin",
      handle: "@sophiem",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "J'ai découvert un véritable havre de paix grâce à KneadMe. Le massage était exactement ce dont j'avais besoin pour me détendre après une semaine stressante.",
    href: "https://twitter.com/sophiem",
  },
  {
    author: {
      name: "Thomas Dubois",
      handle: "@thomasd",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "La qualité des massages est exceptionnelle. Les professionnels sont très compétents et à l'écoute. Je recommande vivement !",
    href: "https://twitter.com/thomasd",
  },
  {
    author: {
      name: "Marie Laurent",
      handle: "@mariel",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Réserver un massage n'a jamais été aussi simple. L'application est intuitive et les thérapeutes sont tous certifiés. Une expérience 5 étoiles !",
  },
];
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

      <Container
        as="section"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-4 md:p-6"
      >
        {professionals.map((provider, index) => (
          <ProfessionalCard {...{ ...provider }} key={index} />
        ))}
      </Container>

      <TestimonialsSection
        title="Ce que disent nos clients"
        description="Découvrez les expériences de relaxation et de bien-être partagées par notre communauté"
        testimonials={testimonials}
      />

      
      <CallToActionSection />

    </main>
  );
}
