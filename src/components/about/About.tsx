"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import VerticalTitle from "@/components/VerticalTitle";
import HorizontalTitle from "@/components/HorizontalTitle";

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

      <div className="flex w-full flex-col items-center gap-4 rounded-2xl shadow-lg backdrop-blur-md backdrop-filter">
        <div className="w-full rounded-2xl bg-white/10 p-4">
          <div className="pb-2 text-2xl font-semibold">Who Am I?</div>
          <div className="w-full rounded-2xl bg-white/10 p-4">
            I am a current student studying Computer Science and I am learning
            Full-Stack ML/AI and Software Engineering.
          </div>
        </div>
        <div className="w-full rounded-2xl bg-white/10 p-4">
          <div className="pb-2 text-2xl font-semibold">Hobbies & Interests</div>
          <div className="flex w-full rounded-2xl bg-white/10 p-4">
            <ul className="list-disc pl-4">
              <li>Art</li>
              <li>Korean</li>
              <li>Anime, Manga, Manhwa, and Movies</li>
              <li>Music</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col justify-center rounded-2xl bg-white/10 px-4 pt-4">
          <div className="my-2 text-2xl font-semibold">My Music</div>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EVHGWrwldPRtj?utm_source=generator&theme=0"
            width="100%"
            height="170"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>

      <div className="hidden md:block">
        <VerticalTitle title="ABOUT ME" />
      </div>
      <div className="flex w-full flex-col items-center justify-center rounded-2xl pb-4 md:h-[800px]">
        <div className="flex w-full flex-col items-center gap-4 rounded-2xl bg-white/10 p-4">
          <div className="text-2xl font-semibold">Contact Me</div>

          <div className="w-full rounded-xl bg-white/10 p-4 text-white">
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
                className="cursor-pointer self-start rounded-full bg-blue-300/10 px-4 py-1 text-sm text-white hover:bg-white/20"
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

          <div className="flex gap-4">
            {[
              {
                icon: <FaInstagram />,
                href: "https://www.instagram.com/simonc2992/",
                hover: "hover:text-pink-200",
              },
              {
                icon: <FaEnvelope />,
                href: "mailto:simoncun2586@gmail.com",
                hover: "hover:text-red-200",
              },
              {
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/simon-cun-3760a8333/",
                hover: "hover:text-blue-200",
              },
              {
                icon: <FaGithub />,
                href: "https://github.com/Simon-Cun",
                hover: "hover:text-purple-200",
              },
            ].map(({ icon, href, hover }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`rounded-lg bg-blue-300/10 p-2 text-white ${hover}`}
              >
                <div className="text-2xl">{icon}</div>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-300/10 px-4 py-2 text-white transition hover:bg-white/30"
          >
            <FaFileAlt />
            View Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
