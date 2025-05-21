import ProfileCard from "@/components/profile";
import { getTranslations } from "next-intl/server";
import techpilotImage from "../../../../public/techpilot.webp";
import programmingImage from "../../../../public/programming.jpg";
import profileImage from "../../../../public/profile.webp";
import cologneImage from "../../../../public/cologne.jpg";
//自己紹介
//なぜドイツに移住したのか
//ドイツでの仕事
//趣味

export default async function About() {
  const t = await getTranslations("/about");

  const list = [
    {
      imageUrl: profileImage,
      imageAlt: "techpilot",
      title: t("aboutMe.title"),
      caption: t("aboutMe.caption"),
    },
    {
      imageUrl: cologneImage,
      imageAlt: "techpilot",
      title: t("whyGermany.title"),
      caption: t("whyGermany.caption"),
    },
    {
      imageUrl: programmingImage,
      imageAlt: "techpilot",
      title: t("careerChange.title"),
      caption: t("careerChange.caption"),
    },
    {
      imageUrl: techpilotImage,
      imageAlt: "techpilot",
      title: t("currentJob.title"),
      caption: t("currentJob.caption"),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col pt-10 gap-20">
      {list.map((el, i) => (
        <ProfileCard {...el} flexReverse={i % 2 === 0} />
      ))}
    </div>
  );
}
