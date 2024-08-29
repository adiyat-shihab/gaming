import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  User,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import GamesCarousel from "@/components/GamesCarousel";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default async function SteamLikeHome() {
  const twitchToken = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
      next: {
        revalidate: 100,
      },
    },
  );

  const result = await twitchToken.json();
  const fetchGames = await fetch("https://api.igdb.com/v4/games", {
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID ?? "",
      Authorization: `Bearer ${result?.access_token}`,
    },
    method: "POST",
    body: `
      fields name, release_dates.date, hypes, cover.image_id, cover.url; 
      where release_dates.date >= ${Math.floor(Date.now() / 1000)}; 
      sort hypes desc; 
      limit 15;
    `,
  });
  const gamesResult = await fetchGames.json();

  const comingSoon = await fetch("https://api.igdb.com/v4/games", {
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID ?? "",
      Authorization: `Bearer ${result?.access_token}`,
    },
    method: "POST",
    body: `
      fields name, release_dates.date, hypes, cover.image_id, cover.url;
     where release_dates.date > ${Math.floor(Date.now() / 1000)} & release_dates.platform = (6,48,49,130);
      sort release_dates.date asc;
      limit 15;
    `,
  });
  const comingSoonResult = await comingSoon.json();
  const currentDate = Math.floor(Date.now() / 1000);
  const oneMonthAgo = currentDate - 180 * 24 * 60 * 60; // Unix timestamp for 30 days ago
  const recentlyReleased = await fetch("https://api.igdb.com/v4/games", {
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID ?? "",
      Authorization: `Bearer ${result?.access_token}`,
    },
    method: "POST",
    body: `
      fields id,  name, release_dates.date, hypes, cover.image_id, cover.url, slug;
      where  release_dates.date <= ${currentDate} & hypes > 60; 
      sort release_dates.date desc; 
      limit 48;
    `,
  });
  const recentlyReleasedResult = await recentlyReleased.json();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 flex items-center justify-between p-4 bg-card">
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4">
                <Link href="#" className="text-lg font-medium hover:underline">
                  Store
                </Link>
                <Link href="#" className="text-lg font-medium hover:underline">
                  Community
                </Link>
                <Link href="#" className="text-lg font-medium hover:underline">
                  About
                </Link>
                <Link href="#" className="text-lg font-medium hover:underline">
                  Support
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h1 className="text-xl md:text-2xl font-bold">GameHub</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4 flex-grow max-w-md mx-4">
          <Input
            type="search"
            placeholder="Search games..."
            className="pl-10"
          />
          <Search className="absolute ml-3 text-muted-foreground" size={18} />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User profile</span>
          </Button>
        </div>
      </nav>

      {/* Main content */}
      <GamesCarousel heading={"Most Anticipated"} gamesResults={gamesResult} />
      <GamesCarousel heading={"Coming Soon"} gamesResults={comingSoonResult} />

      {/*<GamesCarousel*/}
      {/*  heading={"Recently Released"}*/}
      {/*  gamesResults={await recentlyReleased.json()}*/}
      {/*/>*/}

      {/* Footer */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">All Games</h2>
          <div
            className={
              "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mx-auto grid gap-y-4"
            }
          >
            {recentlyReleasedResult.map((game: any) => (
              <Card
                key={game.id}
                className="w-[120px] sm:w-[220px] sm:h-[350px] "
              >
                <Link href={`/${game.id}`}>
                  <CardContent className="p-0 ">
                    {game?.cover?.url && (
                      <Image
                        src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover?.image_id}.webp`}
                        alt={game.name}
                        className="w-full h-[160px] sm:h-[300px] object-contain rounded rounded-t-xl -mt-[0.3rem]"
                        width={500}
                        height={500}
                      />
                    )}
                  </CardContent>
                  <CardFooter className="p-2">
                    <p className="text-xs  sm:text-sm font-medium truncate">
                      {game.name}
                    </p>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
