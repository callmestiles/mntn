import { CircleCheck } from "lucide-react";
import {
  featuresListLeft,
  featuresListRight,
} from "../constants/features-list";

function Details() {
  return (
    <section className="relative text-white h-dvh radial-gradient">
      <div className="relative content-container flex flex-col h-full">
        <h1 className="absolute top-[10%] absolute-x-center text-[18vw] font-chronicle font-bold tracking-normal leading-none text-white/15">
          B T M
        </h1>
        <div className="flex-1 flex flex-col justify-end relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-1/2 h-[65vh] w-[55vw] rounded-md overflow-hidden ">
            <img
              src="/images/under-img-2.jpg"
              alt="Picture of a family hiking on a mountain"
              className="w-full h-full object-cover mask-img absolute top-1/2 transform -translate-y-[40%]"
            />
          </div>
          <div className="flex justify-between items-center mb-8">
            <ul className="flex flex-col gap-2">
              {featuresListLeft.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CircleCheck className="mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <span className="font-cursive italic text-lg mt-8 opacity-0">
              "Beyond the mountains lies your next adventure."
            </span>
            <ul className="flex flex-col gap-2">
              {featuresListRight.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CircleCheck className="mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="noisy" />
    </section>
  );
}

export default Details;
