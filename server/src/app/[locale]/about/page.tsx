import ProfileCard from "@/components/profile";
import { getTranslations } from "next-intl/server";
import techpilotImage from "../../../../public/techpilot.webp"
   //自己紹介
   //なぜドイツに移住したのか
   //ドイツでの仕事
   //趣味



export default async function About() {

  const list = [{
    imageUrl:techpilotImage,
    imageAlt:"techpilot",
    title:"ドイツ企業での業務",
    caption:"現在はドイツ、ミュンヘンにある企業Techpilot Dynamic Marketsにて機械部品の調達プラットフォームの開発を行っています。担当範囲は主にフロントエンドですが、最近はバックエンドの業務にも参加をしています(使用言語はReact,NextJS,Redux,C#). 同僚はすべてドイツ人なので、業務で使用される言語はドイツ語ですが、私は業務に関する会話は英語で行っています。"
  }]

  const t = await getTranslations("/about");

  return <div className="max-w-6xl mx-auto pt-10">{list.map((el)=><ProfileCard {...el} />)}</div>;
}
