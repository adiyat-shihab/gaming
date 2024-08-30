import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const GamesCarousel = ({
  gamesResults,
  heading,
}: {
  gamesResults: any[];
  heading: string;
}) => {
  return (
    <main className="container mx-auto px-4 py-8 flex-grow">
      <section className="">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{heading}</h2>
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full "
        >
          <CarouselContent>
            {gamesResults.map((game: any) => (
              <CarouselItem
                key={game.id}
                className="md:basis-1/2 lg:basis-[11%]"
              >
                <Card className="w-[120px] sm:w-[150px] shrink-0">
                  <Link href={`/${game.id}`}>
                    {" "}
                    <CardContent className="p-0">
                      {game?.cover?.url && (
                        <Image
                          src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover?.image_id}.png`}
                          alt={game.name}
                          className="w-full h-[160px] sm:h-[200px] object-scale-down rounded-t-lg"
                          width={500}
                          height={500}
                        />
                      )}
                    </CardContent>
                    <CardFooter className="p-2">
                      <p className="text-xs sm:text-sm font-medium truncate">
                        {game.name}
                      </p>
                    </CardFooter>
                  </Link>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
};

export default GamesCarousel;
