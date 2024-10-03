


import Timeline from "./profile/_components/Timeline";

import { getAllPosts } from "@/services/PostService";

export default async function Home() {
  let query = {
       limit:10
  }

  const {data:posts}= await getAllPosts(query)



  return (
    <section className="flex max-w-7xl mx-auto gap-4 py-8 md:py-10">
    <div className="hidden md:block">
      LeftBar
    </div>
      <div className="inline-block max-w-2xl mx-auto  justify-center">
       
<Timeline  datas={posts}/>
      
      </div>

      <div className="hidden md:block">
      Rightn Bar
    </div>
    </section>
  );
}
