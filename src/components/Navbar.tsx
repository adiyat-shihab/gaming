"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useUserSession } from "@/hooks/use-user-session";

const Navbar = () => {
  const user = useUserSession(null);
  console.log(user);
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between drop-shadow p-4 bg-card">
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
        <Link href={"/"}>
          <h1 className="text-xl md:text-2xl font-bold">GameHub</h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4 flex-grow max-w-md mx-4">
        <Input type="search" placeholder="Search games..." className="pl-10" />
        <Search className="absolute ml-3 text-muted-foreground" size={18} />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        {!user ? (
          <Link href={"/Login"}>
            <Button variant="secondary">Login</Button>
          </Link>
        ) : (
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User profile</span>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
