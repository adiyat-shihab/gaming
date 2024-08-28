import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Search, User, Facebook, Twitter, Instagram, Youtube, Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Sample game data
const gameCategories = [
    {
        title: "New Releases",
        games: [
            { id: 1, title: "Starfield", image: "/placeholder.svg?height=200&width=150" },
            { id: 2, title: "Baldur's Gate 3", image: "/placeholder.svg?height=200&width=150" },
            { id: 3, title: "Hogwarts Legacy", image: "/placeholder.svg?height=200&width=150" },
            { id: 4, title: "Resident Evil 4", image: "/placeholder.svg?height=200&width=150" },
            { id: 5, title: "Diablo IV", image: "/placeholder.svg?height=200&width=150" },
        ]
    },
    {
        title: "Best Games",
        games: [
            { id: 6, title: "The Witcher 3", image: "/placeholder.svg?height=200&width=150" },
            { id: 7, title: "Red Dead Redemption 2", image: "/placeholder.svg?height=200&width=150" },
            { id: 8, title: "God of War", image: "/placeholder.svg?height=200&width=150" },
            { id: 9, title: "Hades", image: "/placeholder.svg?height=200&width=150" },
            { id: 10, title: "Elden Ring", image: "/placeholder.svg?height=200&width=150" },
        ]
    },
]

export default function SteamLikeHome() {
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
                                <Link href="#" className="text-lg font-medium hover:underline">Store</Link>
                                <Link href="#" className="text-lg font-medium hover:underline">Community</Link>
                                <Link href="#" className="text-lg font-medium hover:underline">About</Link>
                                <Link href="#" className="text-lg font-medium hover:underline">Support</Link>
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
            <main className="container mx-auto px-4 py-8 flex-grow">
                {gameCategories.map((category) => (
                    <section key={category.title} className="mb-8">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4">{category.title}</h2>
                        <ScrollArea className="w-full whitespace-nowrap rounded-md">
                            <div className="flex space-x-4 pb-4">
                                {category.games.map((game) => (
                                    <Card key={game.id} className="w-[120px] sm:w-[150px] shrink-0">
                                        <CardContent className="p-0">
                                            <img src={game.image} alt={game.title} className="w-full h-[160px] sm:h-[200px] object-cover rounded-t-lg" />
                                        </CardContent>
                                        <CardFooter className="p-2">
                                            <p className="text-xs sm:text-sm font-medium truncate">{game.title}</p>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </section>
                ))}
            </main>

            {/* Footer */}
            <footer className="bg-card mt-8">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About GameHub</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Press Center</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Help Center</Link></li>
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Community</Link></li>
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Code of Conduct</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    <Facebook size={24} />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    <Twitter size={24} />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    <Instagram size={24} />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    <Youtube size={24} />
                                    <span className="sr-only">YouTube</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-8" />
                    <div className="text-center text-sm text-muted-foreground">
                        <p>&copy; 2023 GameHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}