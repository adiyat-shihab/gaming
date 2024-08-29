import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Share2,
  ShoppingCart,
  Star,
  Users,
  Calendar,
  Gamepad2,
} from "lucide-react";

export default function GameDetailsPage() {
  // Mock data for the game
  const game = {
    title: "Elden Ring",
    description:
      "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game was directed by Hidetaka Miyazaki and made in collaboration with fantasy novelist George R. R. Martin, who provided material for the game's setting.",
    price: 59.99,
    releaseDate: "February 25, 2022",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    genres: ["Action", "RPG", "Open World"],
    tags: ["Souls-like", "Fantasy", "Difficult"],
    rating: 4.8,
    reviews: 125000,
    minSystemReqs: {
      os: "Windows 10",
      processor: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
      memory: "12 GB RAM",
      graphics: "NVIDIA GeForce GTX 1060 3 GB or AMD Radeon RX 580 4 GB",
      storage: "60 GB available space",
    },
    screenshots: [
      "/placeholder.svg?height=300&width=533",
      "/placeholder.svg?height=300&width=533",
      "/placeholder.svg?height=300&width=533",
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-card shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">{game.title}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <Badge variant="secondary">{game.developer}</Badge>
            <Badge variant="secondary">{game.publisher}</Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt={`${game.title} cover`}
                className="w-full h-full object-cover"
              />
            </div>
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex space-x-4">
                {game.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="w-60 h-auto rounded-md"
                  />
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-4">${game.price}</div>
                <Button className="w-full mb-2">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="outline" className="w-full">
                  <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center">
                  <Star className="mr-2 h-5 w-5 text-yellow-400" />
                  <span className="font-bold">{game.rating}</span>
                  <span className="text-muted-foreground ml-2">
                    ({game.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Release Date: {game.releaseDate}</span>
                </div>
                <div className="flex items-center">
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  <span>Genres: {game.genres.join(", ")}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="about" className="mt-8">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="system-requirements">
              System Requirements
            </TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="mt-4">
            <h2 className="text-2xl font-bold mb-4">About This Game</h2>
            <p className="text-muted-foreground">{game.description}</p>
            <h3 className="text-xl font-bold mt-6 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {game.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="system-requirements" className="mt-4">
            <h2 className="text-2xl font-bold mb-4">
              Minimum System Requirements
            </h2>
            <ul className="space-y-2">
              <li>
                <strong>OS:</strong> {game.minSystemReqs.os}
              </li>
              <li>
                <strong>Processor:</strong> {game.minSystemReqs.processor}
              </li>
              <li>
                <strong>Memory:</strong> {game.minSystemReqs.memory}
              </li>
              <li>
                <strong>Graphics:</strong> {game.minSystemReqs.graphics}
              </li>
              <li>
                <strong>Storage:</strong> {game.minSystemReqs.storage}
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-card mt-12">
        <div className="container mx-auto px-4 py-6">
          <Separator className="mb-6" />
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              &copy; 2023 GameHub. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
              <Button variant="ghost" size="sm">
                <Users className="mr-2 h-4 w-4" /> Community Hub
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
