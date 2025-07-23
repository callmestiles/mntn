import Navbar from "./Navbar";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url(/images/hero-img.jpg)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-0" />
      <div className="absolute inset-0 h-full content-container z-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="space-y-4">
            <p className="text-lg tracking-[20px] text-amber-100 font-gilroy-medium font-semibold">
              A HIKING GUIDE
            </p>
            <h1 className="text-6xl font-chronicle text-white leading-[70px] tracking-tight">
              Be <span className="italic">Prepared</span> For The <br />{" "}
              Mountains And Beyond!
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
