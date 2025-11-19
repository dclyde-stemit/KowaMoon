import { useEffect, useRef } from "react";

interface AdBannerProps {
  adKey: string;
  format?: "banner" | "square" | "leaderboard";
  className?: string;
}

export default function AdBanner({ adKey, format = "banner", className = "" }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && adRef.current && !adRef.current.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = `https://data.adstera.com/ads-${adKey}.js`;
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      adRef.current.appendChild(script);
    }
  }, [adKey]);

  const dimensions = {
    banner: "min-h-[90px] md:min-h-[250px]",
    square: "min-h-[250px]",
    leaderboard: "min-h-[90px]",
  };

  return (
    <div className={`flex items-center justify-center bg-muted/30 rounded-lg overflow-hidden ${dimensions[format]} ${className}`}>
      <div ref={adRef} className="w-full h-full flex items-center justify-center">
        <div className="text-muted-foreground text-sm font-medium bg-muted/50 px-4 py-2 rounded">
          Ad Space - Configure with Adsterra
        </div>
      </div>
    </div>
  );
}
