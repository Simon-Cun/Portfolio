import HorizontalTitle from "@/components/HorizontalTitle";
import { GalleryData } from "@/data/gallery";
import Image from "next/image";
import date from "@/public/gallery/date.jpg";
export type GalleryItem = {
  src: string;
  alt: string;
};
const Gallery = () => {
  return (
    <section
      id="gallery"
      className="h-auto w-full justify-center border-b-1 py-20"
    >
      <div className="flex w-full justify-center">
        <HorizontalTitle title="GALLERY" />
      </div>
      <div className="mx-4 md:flex">
        <div className="mt-10 grid justify-center gap-5 md:ml-5 md:grid-cols-4">
          {GalleryData.map(({ src, alt }, index) => {
            return (
              <Image
                src={src}
                alt={alt}
                key={index}
                className="w-[600px] object-cover"
              />
            );
          })}
        </div>
        <Image
          src={date}
          alt=""
          className="mt-5 object-cover md:mx-5 md:mt-10 md:w-[16vw]"
        />
      </div>
    </section>
  );
};

export default Gallery;
