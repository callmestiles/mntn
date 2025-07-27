// import Details from "./components/Details";
// import Features from "./components/Features";
// import Hero from "./components/Hero";
// import Slideshow from "./components/Slideshow";

// function App() {
//   return (
//     <div>
//       <Hero />
//       <Features />
//       <Details />
//       <Slideshow />
//     </div>
//   );
// }

// export default App;

import React from "react";
import ScrollCarousel from "./components/ScrollCarousel";

const App = () => {
  const slides = [
    {
      id: 1,
      content: (
        <img
          src="https://via.placeholder.com/1200x800?text=Biodiversity"
          alt="Slide 1"
        />
      ),
    },
    {
      id: 2,
      content: (
        <img
          src="https://via.placeholder.com/1200x800?text=Community"
          alt="Slide 2"
        />
      ),
    },
    {
      id: 3,
      content: (
        <img
          src="https://via.placeholder.com/1200x800?text=Conservation"
          alt="Slide 3"
        />
      ),
    },
  ];

  return (
    <div>
      <ScrollCarousel slides={slides} />
    </div>
  );
};

export default App;
