import Image, { StaticImageData } from "next/image";

export default function ProfileCard({
  imageUrl,
  imageAlt,
  title,
  caption,
  flexReverse = false,
}: {
  imageUrl: StaticImageData;
  imageAlt: string;
  title: string;
  caption: string;
  flexReverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row ${flexReverse ? "md:flex-row-reverse" : ""} gap-8 md:gap-10 items-center`}
    >
      <div className="w-full md:w-[450px] h-[250px] md:h-[300px] relative shrink-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover rounded-xl shadow-2xl"
          sizes="(max-width: 768px) 100vw, 450px"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 w-full">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-base md:text-lg">{caption}</p>
      </div>
    </div>
  );
}
