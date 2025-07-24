import Navbar from "./Navbar";

function Hero() {
  return (
    <section
      className="relative h-[110vh] bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url(/images/hero-img.jpg)" }}
    >
      {/* Overlay to make navbar items and text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-0" />
      {/* Overlay to transition between pages */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-black/10 to-[#293b1e] z-0" />

      {/* Content Container */}
      <div className="absolute inset-0 h-full content-container z-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="-translate-y-[30%] space-y-8 text-center">
            <p className="text-lg tracking-[20px] text-[#e0e4de] font-gilroy-medium">
              A HIKING GUIDE
            </p>
            <h1 className="text-7xl font-chronicle text-white leading-[70px] tracking-tight font-light">
              Beyond the{" "}
              <span className="text-[#bfce6b] italic font-cursive">
                Mountains
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
