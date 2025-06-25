// components/About/AboutContent.ts
import { useState } from "react";

export const NoteData = [
  {
    title: "Who Am I?⁉️",
    description: "Breif summary of who I am and my message to you!",
    content:
      "Hello to whoever is here and wants to know more about me. My name is Simon and I am a student currently studying Computer Science at UCR. I want to learn more about Full-Stack Development, AI/ML, and mostly Software Engineering in general. I hope to get a job that I am satisfied with and I am always looking forward to meeting lots of new people. I'm happy that you have checked out my portfolio and hope you learn a lot more about me!",
  },
  {
    title: "Computer Science Stuff 💻📝",
    description:
      "Revelvant coursework or things I do in the space of Computer Science.",
    content: "N/A",
  },
  {
    title: "My Music 🎧🎶",
    description: "List of music and artists I listen to.",
    content: "N/A",
  },
  {
    title: "Hobbies and Interests 🎨📎",
    description: "Things I do aside from Computer Science.",
    content: "N/A",
  },
];

export const useAboutContent = () => {
  const [selectedNote, setSelectedNote] = useState(NoteData[0]);
  return {
    selectedNote,
    setSelectedNote,
    NoteData,
  };
};
