import { Palette } from "lucide-react";
import { useTheme } from "@/lib/themeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const colorThemes = [
  { value: "default", label: "Orange (Default)", color: "hsl(25, 95%, 53%)" },
  { value: "blue", label: "Ocean Blue", color: "hsl(210, 100%, 56%)" },
  { value: "purple", label: "Purple Dream", color: "hsl(270, 95%, 60%)" },
  { value: "green", label: "Forest Green", color: "hsl(142, 76%, 36%)" },
  { value: "rose", label: "Cherry Blossom", color: "hsl(351, 95%, 60%)" },
  { value: "amber", label: "Golden Sunset", color: "hsl(45, 100%, 51%)" },
] as const;

export function ThemeSelector() {
  const { colorTheme, setColorTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Select color theme">
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {colorThemes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setColorTheme(theme.value)}
            className="flex items-center gap-2"
          >
            <div
              className="w-4 h-4 rounded-full border-2 border-border"
              style={{ backgroundColor: theme.color }}
            />
            <span>{theme.label}</span>
            {colorTheme === theme.value && (
              <span className="ml-auto text-xs">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
