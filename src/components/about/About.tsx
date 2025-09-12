"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import VerticalTitle from "@/components/VerticalTitle";
import HorizontalTitle from "@/components/HorizontalTitle";
import MusicPlayer from "@/components/about/MusicPlayer";

const About = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b80qjz8",
        "template_nesznbr",
        formRef.current!,
        "4WLIg8cq3sUpE_wwi",
      )
      .then(
        () => {
          console.log("✅ Message sent!");
          setSent(true);
          setTimeout(() => setSent(false), 3000);
          formRef.current?.reset();
        },
        (error) => {
          console.error("❌ Failed to send message:", error);
        },
      );
  };

  return (
    <section
      id="about"
      className="relative flex w-full flex-col items-center justify-center gap-8 px-[2vw] py-4 pt-20 md:flex-row md:px-[9vw] md:pt-0"
    >
      <div className="block md:hidden">
        <HorizontalTitle title="ABOUT ME" />
      </div>
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Removed backdrop-blur here */}
      <MusicPlayer/>
      

      <div className="hidden md:block">
        <VerticalTitle title="ABOUT ME" />
      </div>
      <div className="flex w-full flex-col items-center justify-center rounded-2xl pb-4 md:h-[800px]">
        <div className="w-full rounded-2xl bg-white/5 p-4 mb-4">
          <div className="pb-2 text-2xl font-semibold">Hobbies & Interests</div>
          <div className="flex w-full rounded-2xl bg-white/5 p-4">
            <ul className="list-disc pl-4">
              <li>Art</li>
              <li>Korean</li>
              <li>Anime, Manga, Manhwa, and Movies</li>
              <li>Music</li>
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-2 rounded-2xl p-4 bg-white/5">
          <div className="text-2xl font-semibold">Contact Me</div>

          <div className="w-full rounded-xl bg-white/5 p-4 text-white">
            <h3 className="mb-2 text-lg font-semibold">Leave a Message</h3>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-3"
            >
              <div>
                <label className="mb-1 block text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-md bg-white p-2 text-black"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm">Message</label>
                <textarea
                  rows={3}
                  name="message"
                  required
                  className="w-full rounded-md bg-white p-2 text-black"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer self-start rounded-lg bg-gray-300/10 px-4 py-1 text-sm text-white hover:bg-white/20"
              >
                Send
              </button>
              {sent && (
                <p className="mt-2 text-sm text-green-400">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
