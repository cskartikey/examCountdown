import CountdownTimer from "@/components/CountDownTimer";
import Head from "next/head";

export const metadata = {
  title: "grind.",
};

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>grind.</title>
      </Head>
      <CountdownTimer targetDate="2024-02-20" isHero={true} />
    </div>
  );
};

export default Home;
