import {GetServerSideProps, NextPage} from "next";


export default async function Home() {
    const base = "USD"; // 基本通貨
    const target = "EUR"; // 目標通貨
    const apiKey = process.env.EXCHANGE_RATE_API_KEY;

    let rate: number | null = null;
    let error: string | null = null;

    try {

        const response:Response= await fetch(
            `https://v6.exchangerate-api.com/v6/756e673c9d650322ec1f08d9/latest/USD`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                cache: "no-store", // キャッシュを無効化
            }// キャッシュを無効化して最新データを取得
        );

        if (!response.ok) {
            throw new Error("Failed to fetch exchange rates");
        }

        const data: {conversion_rates:Record<string,number>} = await response.json();

        console.log(data.conversion_rates)
        // rate = data.rates[target] / data.rates[base]; // 通貨ペアのレートを計算
    } catch (err) {
        error = (err as Error).message;
    }

    return (
        <div>
            <h1>Currency Converter</h1>
            {/*{error ? (*/}
            {/*    <p style={{ color: "red" }}>Error: {error}</p>*/}
            {/*) : rate ? (*/}
            {/*    <p>*/}
            {/*        Exchange Rate: 1 {base} = {rate.toFixed(2)} {target}*/}
            {/*    </p>*/}
            {/*) : (*/}
            {/*    <p>Loading...</p>*/}
            {/*)}*/}
        </div>
    );
}
