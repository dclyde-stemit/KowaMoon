import VideoPlayer from '../VideoPlayer';

export default function VideoPlayerExample() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <VideoPlayer
        anilistId="ani21"
        episode={1}
        type="sub"
        autoPlay={false}
      />
    </div>
  );
}
