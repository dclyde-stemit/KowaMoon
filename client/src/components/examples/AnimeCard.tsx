import AnimeCard from '../AnimeCard';

export default function AnimeCardExample() {
  return (
    <div className="w-64">
      <AnimeCard
        id="1"
        title="Demon Slayer: Kimetsu no Yaiba"
        poster="https://placehold.co/400x600/8b5cf6/ffffff?text=Demon+Slayer"
        rating={8.9}
        onClick={() => console.log('Card clicked')}
      />
    </div>
  );
}
