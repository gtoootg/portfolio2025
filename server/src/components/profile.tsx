import Image, { StaticImageData } from "next/image";

export default async function ProfileCard({
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
      className={`flex gap-10 items-center ${flexReverse ? "flex-row-reverse" : "flex-row"} `}
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        className="shadow-2xl shrink-0"
        objectFit="fill"
        width={450}
        height={300}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg">{caption}</p>
      </div>
    </div>
  );
}
