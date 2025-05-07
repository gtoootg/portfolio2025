import ProfileCard from "@/components/profile";
import { getTranslations } from "next-intl/server";
import techpilotImage from "../../../../public/techpilot.webp"
import profileImage from "../../../../public/profile.PNG"
   //自己紹介
   //なぜドイツに移住したのか
   //ドイツでの仕事
   //趣味



export default async function About() {

  const list = [{
    imageUrl:profileImage,
    imageAlt:"techpilot",
    title:"なぜドイツに移住したのか",
    caption:"一言でまとめると若い頃に海外被れしたことが原因です。大学時代に海外旅行にたくさん行き、大学で多くの留学生と交流することで、できるだけ国際的な環境で人生を送りたいと考えるようになりました。そのためには、日本を飛び出す必要があると考え、工学分野の仕事が見つけやすいドイツへの移住を真剣に検討するようになりました。日本国内で自動車部品メーカーで3年間勤務したあと、退職をしてドイツで転職活動を行う予定でしたが、運良く同社のドイツ現地法人からローカル採用の契約を頂くことができ、2019年にドイツ移住を達成しました。"
  },
  {
    imageUrl:techpilotImage,
    imageAlt:"techpilot",
    title:"自動車業界からIT業界へ",
    caption:"新卒から6年間自動車部品の設計に携わりましたが、どうしてもこの仕事が好きになれず、転職を考えるようになりました。そこでたまたま出会ったのが、Progateというプログラミングの学習サイト。Web開発という仕事があることを知り、プログラミング学習にのめり込むようになりました。半年かけてフロントエンド言語の習得と簡単なポートフォリオ作成を完了させ、ドイツで転職活動を行ったところ、幸いにも当時はWeb開発の仕事がドイツでも売り手市場で、いくつかの会社からオファーをいただくことができ、2022年にWeb開発者としてのキャリアをスタートさせました。"
  }
  ,
  {
    imageUrl:techpilotImage,
    imageAlt:"techpilot",
    title:"ドイツ企業での業務",
    caption:"現在はドイツ、ミュンヘンにある企業Techpilot Dynamic Marketsにて機械部品の調達プラットフォームの開発を行っています。担当範囲は主にフロントエンドですが、最近はバックエンドの業務にも参加をしています(使用言語はReact,NextJS,Redux,C#). 同僚はすべてドイツ人なので、業務で使用される言語はドイツ語ですが、私は業務に関する会話は英語で行っています。"
  }]

  const t = await getTranslations("/about");

  return <div className="max-w-6xl mx-auto flex flex-col pt-10 gap-10">{list.map((el,i)=><ProfileCard {...el} flexReverse={i%2 === 0}/>)}</div>;
}
