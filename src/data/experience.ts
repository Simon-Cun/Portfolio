import { useState } from "react";
import example from "@/public/placeholder.webp";

export const ExperienceData = [
  {
    logo: example,
    title: "Example",
    job: "Example",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris, sed tempor velit. Vivamus efficitur turpis at massa dictum, nec rhoncus sem euismod.",
  },
  {
    logo: example,
    title: "Example",
    job: "Example",
    information:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    logo: example,
    title: "Example",
    job: "Example",
    information:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Corrupti quos dolores et quas molestias excepturi sint occaecati.",
  },
  {
    logo: example,
    title: "Example",
    job: "Example",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.",
  },
];

export const useExperienceContent = () => {
  const [selectedExperience, setSelectedExperience] = useState(
    ExperienceData[0],
  );
  return { selectedExperience, setSelectedExperience, ExperienceData };
};
