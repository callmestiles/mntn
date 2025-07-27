interface Slide {
  id: number;
  imgUrl: string;
  title: string;
}

interface SlideshowProps {
  slides: Slide[];
}

function Slideshow({ slides }: SlideshowProps) {
  return (
    <section className="relative bg-[#4e6832] h-dvh text-white">
      <div className="content-container py-20">
        <h1 className="font-chronicle text-5xl text-center">
          Hiking: Our Passion, <br /> Our Purpose
        </h1>
      </div>
    </section>
  );
}

export default Slideshow;
