

import MainTimeLine from "@/components/homepage/MainTimeLine";
import CreateNewPostModal from "@/components/modal/CreatePostModal";
import { getAllPosts } from "@/services/PostService";

export default async function Home() {
 let query={
  limit:20
 }
 const {data:postDataSrver} = await getAllPosts(query)

 
 

  return (
    <section className="flex max-w-7xl mx-auto gap-4 py-8 md:py-10">
      <div className="hidden md:block">Left Bar</div>
      <div className="xl:min-w-3xl xl:max-w-3xl w-full  mx-auto">
      <div className=" p-4 bg-sky-900/25 xl:min-w-3xl xl:max-w-3xl w-full dark:bg-slate-800/45 rounded-md">
            <CreateNewPostModal  />

            </div>
            <MainTimeLine postSData={postDataSrver}/>
      </div>
     
      <div className="hidden md:block">Right Bar</div>
    </section>
  );
}