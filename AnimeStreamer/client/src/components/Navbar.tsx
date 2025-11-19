import { Search, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

interface NavbarProps {
  onSearchChange?: (query: string) => void;
}

export default function Navbar({ onSearchChange }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2">
              <Play className="w-6 h-6 text-ring fill-ring" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-amber-500 to-rose-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>KowaMoon</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2" data-testid="link-browse">
                Browse
              </Link>
              <Link href="/" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2" data-testid="link-popular">
                Popular
              </Link>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search anime..."
                className="pl-10 rounded-full"
                onChange={(e) => onSearchChange?.(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" data-testid="button-search-mobile" className="lg:hidden">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
