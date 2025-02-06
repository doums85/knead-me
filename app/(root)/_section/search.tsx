import {
  Input,
  Button,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
  PopoverTrigger,
  PopoverContent,
  Popover,
  Calendar,
} from "@/components/ui";
import { Container } from "@/components/shared";

export default function SearchSection() {
  return (
    <section className="p-6 bg-gray-100 mb-4">
      <Container className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 items-center">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 " />
          <Input
            className="pl-10 pr-4 py-2 bg-white rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            placeholder="Rechercher une ville"
            type="text"
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full flex items-center justify-between" variant="outline">
              <span>Choisir une date</span>
              <CalendarIcon className="w-5 h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 max-w-[276px]">
            <Calendar />
          </PopoverContent>
        </Popover>
        {/* Prestations */}
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Choisir une prestation" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="massage-relaxant">Massage relaxant</SelectItem>
              <SelectItem value="massage-sportif">Massage sportif</SelectItem>
              <SelectItem value="massage-profond">Massage en profondeur</SelectItem>
              <SelectItem value="massage-aux-pierres-chaudes">
                Massage aux pierres chaudes
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="featured">Mis en avant</SelectItem>
              <SelectItem value="newest">Plus récent</SelectItem>
              <SelectItem value="price-low">Prix croissant</SelectItem>
              <SelectItem value="price-high">Prix décroissant</SelectItem>
              <SelectItem value="rating">Mieux notés</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="w-full" variant={"darker"}>
          Rechercher
        </Button>
      </Container>
    </section>
  );
}

interface CalendarIconProps {
  [key: string]: any;
}

function CalendarIcon(props: CalendarIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

interface SearchIconProps {
  [key: string]: any;
}

function SearchIcon(props: SearchIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
