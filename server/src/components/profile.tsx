import Image, { StaticImageData } from "next/image";
import { getTranslations } from "next-intl/server";

import techpilotImage from "../../public/techpilot.webp"

export default async function ProfileCard({imageUrl,imageAlt, title,caption,flexReverse=false
}:{imageUrl:StaticImageData, imageAlt:string,title:string,caption:string, flexReverse?:boolean}) {
  

   return (
    <div className={`flex gap-12 items-center ${flexReverse ? "flex-row-reverse" : "flex-row"}`}>
        <Image
          src={imageUrl} // ここに実際の顔写真を入れる
          alt={imageAlt}
          className="shadow-xl"
          width={600}
          height={400}
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg">{caption}</p>
            {/* 現在はドイツ、ミュンヘンにある企業Techpilot Dynamic Marketsにて機械部品の調達プラットフォームの開発を行っています。担当範囲は主にフロントエンドですが、最近はバックエンドの業務にも参加をしています(使用言語はReact,NextJS,Redux,C#). 同僚はすべてドイツ人なので、業務で使用される言語はドイツ語ですが、私は業務に関する会話は英語で行っています。</p> */}
        </div>

      </div>

   )

  // return (
  //   <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg ">
  //     {/* 顔写真と名前 */}

      
      
   
  //     {/* <div className="flex items-center space-x-6 justify-center mb-8 w-full">
  //       <Image
  //         src="/profile.PNG" // ここに実際の顔写真を入れる
  //         alt="Profile Photo"
  //         className="w-[200px] h-[200px] rounded-full border-4 border-gray-300"
  //         width={200}
  //         height={200}
  //       />
  //       <div>
  //         <h1 className="text-3xl font-semibold">{t("name")}</h1>
  //         <p className="text-gray-500">Frontend Developer</p>
  //       </div>
  //     </div>

  //     {/* 自己紹介 */}
  //     <section className="mb-8">
  //       <h2 className="text-2xl font-semibold text-gray-800">自己紹介</h2>
  //       <p className="mt-2 text-gray-600">
  //         2019年にドイツへ移住。日系企業にて3年間自動車用部品の設計エンジニアとして勤務した後、コロナ禍にプログラミングを独学し、Web開発業界へ転職。
  //         現在はドイツ、ミュンヘンの企業にて機械部品の調達プラットフォームを開発しています（主にフロントエンドを担当）。
  //       </p>
  //     </section>

  //     {/* 職歴 */}
  //     <section className="mb-8">
  //       <h2 className="text-2xl font-semibold text-gray-800">職歴</h2>
  //       <ul className="mt-2 text-gray-600">
  //         <li className="mb-4">
  //           <strong>Techpilot dynamic markets Gmbh</strong> - Frontend Developer
  //           (2022〜)
  //           <p>
  //             機械部品の調達プラットフォームの開発（フロントエンド、及び一部バックエンドを担当）
  //           </p>
  //           <p>
  //             フロントエンド: 新機能実装、バグ修正、E2Eテスト (React, Redux,
  //             Typescript, Cypress)
  //           </p>
  //           <p>バックエンド: APIのバグ修正(.NET, PostgreSQL)</p>
  //           <p>自社Webサイトの開発</p>
  //         </li>
  //         <li className="mb-4">
  //           <strong>Koyo Deustchland Gmbh JTEKT European Operation</strong> -
  //           機械設計エンジニア(2019-2022)
  //           <p>自動車用軸受（E-motor,トランスミッション）の設計</p>
  //           <p>欧州顧客（自動車メーカー）の開発サポート</p>
  //         </li>
  //         <li className="mb-4">
  //           <strong>株式会社ジェイテクト</strong> -
  //           機械設計エンジニア(2016-2019)
  //           <p>自動車ホイール用軸受の設計およびプロジェクト管理</p>
  //           <p>新入社員および外国人スタッフのOJT指導</p>
  //         </li>
  //       </ul>
  //     </section>

  //     <section className="mb-8">
  //       <h2 className="text-2xl font-semibold text-gray-800">学歴</h2>
  //       <ul className="mt-2 text-gray-600">
  //         <li className="mb-4">
  //           <strong>XYZ University</strong> - コンピュータサイエンス学士
  //           (2014年〜2018年)
  //           <p>学士号取得、プログラミングとデータベースの重点的な学習</p>
  //         </li>
  //       </ul>
  //     </section>

  //     {/* 趣味 */}
  //     <section className="mb-8">
  //       <h2 className="text-2xl font-semibold text-gray-800">趣味</h2>
  //       <ul className="mt-2 text-gray-600">
  //         <li className="mb-2">ランニングとハイキング</li>
  //         <li className="mb-2">音楽（ギター演奏）</li>
  //         <li className="mb-2">映画鑑賞と読書</li>
  //       </ul>
  //     </section>
  //   </div> */}
  // );
}
