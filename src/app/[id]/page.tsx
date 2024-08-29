import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Star,
  Calendar,
  Users,
  Clock,
  Gamepad,
  Monitor,
  Award,
  ThumbsUp,
  MessageSquare,
  Share2,
} from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default async function Page({ params }: { params: { id: string } }) {
  const game = {
    title: "Cyberpunk 2077",
    cover: "/placeholder.svg?height=600&width=400",
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
    releaseDate: "December 10, 2020",
    developer: "CD Projekt Red",
    genres: ["Role-playing (RPG)", "Shooter", "Adventure"],
    themes: ["Cyberpunk", "Sci-fi", "Action"],
    platforms: [
      "PC",
      "PlayStation 5",
      "Xbox Series X|S",
      "PlayStation 4",
      "Xbox One",
      "Stadia",
    ],
    rating: 75,
    criticScore: 86,
    userScore: 69,
    playtime: 103,
    screenshots: [
      "/placeholder.svg?height=300&width=533",
      "/placeholder.svg?height=300&width=533",
      "/placeholder.svg?height=300&width=533",
      "/placeholder.svg?height=300&width=533",
    ],
  };
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
  const gameData = await fetch("https://api.igdb.com/v4/games", {
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID ?? "",
      Authorization: `Bearer ${result?.access_token}`,
    },
    method: "POST",
    body: `
      fields *, screenshots.*, cover.*, first_release_date, involved_companies.company.*;
      where  id = ${params.id}; 
    `,
  });
  const gameJson = await gameData.json();
  const games = gameJson[0];
  const releaseDate = new Date(games.first_release_date * 1000).toDateString();
  console.log(games);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-card ">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">{games.name}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-0">
                <Image
                  src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${games?.cover?.image_id}.webp`}
                  alt={games.name}
                  width={500}
                  height={500}
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-4xl font-bold">{game.rating}</div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        Rating
                      </div>
                      <div className="flex items-center">
                        <Star className="text-yellow-400 w-4 h-4 mr-1" />
                        <Star className="text-yellow-400 w-4 h-4 mr-1" />
                        <Star className="text-yellow-400 w-4 h-4 mr-1" />
                        <Star className="text-yellow-400 w-4 h-4 mr-1" />
                        <Star className="text-muted-foreground w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  {/*<Button*/}
                  {/*    className="w-full mb-2"*/}
                  {/*    variant={gameStatus === 'Want to play' ? 'default' : 'outline'}*/}
                  {/*    onClick={() => handleStatusChange('Want to play')}*/}
                  {/*>*/}
                  {/*  Want to play*/}
                  {/*</Button>*/}
                  {/*<Button*/}
                  {/*    className="w-full mb-2"*/}
                  {/*    variant={gameStatus === 'Playing' ? 'default' : 'outline'}*/}
                  {/*    onClick={() => handleStatusChange('Playing')}*/}
                  {/*>*/}
                  {/*  Playing*/}
                  {/*</Button>*/}
                  {/*<Button*/}
                  {/*    className="w-full"*/}
                  {/*    variant={gameStatus === 'Played' ? 'default' : 'outline'}*/}
                  {/*    onClick={() => handleStatusChange('Played')}*/}
                  {/*>*/}
                  {/*  Played*/}
                  {/*</Button>*/}
                  <Select>
                    <SelectTrigger className={"  "}>
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full justify-start mb-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="info">Info</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground mb-6">{games.storyline}</p>

                <h3 className="text-xl font-semibold mb-2">Information</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Release Date
                      </div>
                      <div>{releaseDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Developer
                      </div>
                      <div>{games.involved_companies.pop().company.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Average Playtime
                      </div>
                      <div>{game.playtime} hours</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Gamepad className="w-5 h-5 mr-2 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Genres
                      </div>
                      <div>{game.genres.join(", ")}</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">Platforms</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.platforms.map((platform, index) => (
                    <Badge key={index} variant="secondary">
                      <Monitor className="w-4 h-4 mr-1" />
                      {platform}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Critic Score</h3>
                <div className="flex items-center mb-6">
                  <div className="bg-green-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    {game.criticScore}
                  </div>
                  <div>
                    <div className="font-semibold">
                      Generally favorable reviews
                    </div>
                    <div className="text-sm text-muted-foreground">
                      based on 93 Critic Reviews
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">User Score</h3>
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    {game.userScore}
                  </div>
                  <div>
                    <div className="font-semibold">
                      Mixed or average reviews
                    </div>
                    <div className="text-sm text-muted-foreground">
                      based on 26733 Ratings
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">Screenshots</h3>
                <ScrollArea className="w-full whitespace-nowrap rounded-md mb-6">
                  <div className="flex space-x-4 pb-4">
                    {games.screenshots.map((screenshot: any, index: number) => (
                      <Card key={index} className="w-[300px] shrink-0">
                        <CardContent className="p-0">
                          <Image
                            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${screenshot.image_id}.webp`}
                            alt={`Screenshot ${index + 1}`}
                            className="w-full h-auto rounded-lg"
                            width={500}
                            height={500}
                          />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="info">
                <h2 className="text-2xl font-semibold mb-4">Game Info</h2>

                <h3 className="text-xl font-semibold mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.genres.map((genre, index) => (
                    <Badge key={index} variant="secondary">
                      {genre}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Themes</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.themes.map((theme, index) => (
                    <Badge key={index} variant="outline">
                      {theme}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Platforms</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.platforms.map((platform, index) => (
                    <Badge key={index} variant="secondary">
                      <Monitor className="w-4 h-4 mr-1" />
                      {platform}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Status</h3>
                <Badge variant="default" className="mb-6">
                  Released
                </Badge>

                <h3 className="text-xl font-semibold mb-2">Release Dates</h3>
                <div className="mb-6">
                  <div className="font-semibold">{game.releaseDate}</div>
                  <div className="text-sm text-muted-foreground">Worldwide</div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="bg-card mt-12">
        <div className="container mx-auto px-4 py-6">
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2023 GameHub. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Comment
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
