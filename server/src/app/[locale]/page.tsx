import ProfileCard from "@/components/profile";
import { Link } from "@/i18n/routing";

export default function Home() {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
      <p className="text-lg mb-6">message</p>
      <Link href="/about">
        <span className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          詳しく見る
        </span>
      </Link>
    </section>
  );
}
