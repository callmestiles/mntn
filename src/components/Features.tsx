import FeaturesCard from "./Features-Card";

function Features() {
  return (
    <section className="py-20 relative bg-[#293b1e] text-white">
      <div className="content-container flex flex-col gap-25 items-end">
        <FeaturesCard
          title="Get Started"
          subtitle="What level of hiker are you?"
          description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
          imageUrl="/images/feature-1.png"
          imageAlt="A person hiking on a trail"
          stepNumber="01"
        />

        <FeaturesCard
          title="Plan Your Hike"
          subtitle="Find the perfect trail"
          description="Use our comprehensive database to find trails that match your skill level and interests. Whether you're looking for a short day hike or a challenging multi-day trek, we've got you covered."
          imageUrl="/images/feature-2.png"
          imageAlt="A scenic view of a mountain trail"
          stepNumber="02"
          toLeft={true}
        />

        <FeaturesCard
          title="Track Your Progress"
          subtitle="Stay on top of your hiking goals"
          description="Log your hikes, track your progress, and share your experiences with the community. Our platform makes it easy to keep a record of your adventures and achievements."
          imageUrl="/images/feature-3.jpg"
          imageAlt="A person checking their hiking app"
          stepNumber="03"
        />
      </div>
    </section>
  );
}

export default Features;
