import { type NextPage } from "next";
import Head from "next/head";
import { getOptionsForVote } from "../utils/getRandomPokemon";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [first, second] = getOptionsForVote();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta
          name="description"
          content="A Pokemon applicaton powered by create-t3-app"
        />
      </Head>

      <main className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-[#2393ee] to-[#6dccdd]">
        <div className="text-center text-2xl">Tallest Pokemon</div>
        <div className="p-2" />
        <div className="flex max-w-2xl items-center justify-between rounded border p-8">
          <div className="h-16 w-16 bg-red-200">{first}</div>
          <div className="text-center text-2xl">vs</div>
          <div className="h-16 w-16 bg-red-200">{second}</div>
        </div>
      </main>
    </>
  );
};

export default Home;
