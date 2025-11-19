import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection
      title="Attack on Titan"
      synopsis="In a world where humanity resides within enormous walled cities to protect themselves from the gigantic man-eating Titans that roam the outside world, Eren Yeager joins the military to fight back."
      genres={["Action", "Dark Fantasy", "Drama"]}
      onWatch={() => console.log('Watch clicked')}
      onAddToList={() => console.log('Add to list clicked')}
    />
  );
}
