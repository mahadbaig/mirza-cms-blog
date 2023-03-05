import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, PostWidgets, Categories } from "../Components";

const posts = [
  {
    title:"Blockchain Fundamentals",
    excerpt:"Bitcoin ipsum dolor sit amet. Full node satoshis genesis block UTXO decentralized consensus Bitcoin Improvement Proposal decentralized segwit."
  },
  {
    title:"Blockchain Advanced",
    excerpt:"Blockchain ipsum dolor sit amet. Full node satoshis genesis block UTXO decentralized consensus Bitcoin Improvement Proposal decentralized segwit."
  }
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Mirza CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-red-400">
        <div className="lg:col-span-8 col-span-1 bg-red-300">
        {
         posts.map((post) =>{    //The function in map should return
          return(
            <div>
              <PostCard 
              post = {post}
              key = {post.title}
              />
            </div>
          )
         }) 
        }
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidgets />
            <Categories />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
