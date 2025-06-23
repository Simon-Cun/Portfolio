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
      <div className="flex">
        <div className="ml-10 mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {GalleryData.map(({ src, alt }, index) => {
            return (
              <Image
                src={src}
                alt={alt}
                key={index}
                width={400}
                className="object-cover"
              />
            );
          })}
        </div>
        <Image src={date} alt="" width={400} className="mt-10 mx-5 object-cover" />
      </div>
    </section>
  );
};

export default Gallery;
