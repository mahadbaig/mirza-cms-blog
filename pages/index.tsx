import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, PostWidgets, Categories } from "../Components";
import { getPost } from "../services"


const Home: NextPage = ({ posts }:any) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Mirza CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        {
         posts.map((post:any) =>{    //The function in map should return
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

export async function getStaticProps(){
  const posts = (await getPost()) || [];
  return {
    props: { posts }
  }
}
