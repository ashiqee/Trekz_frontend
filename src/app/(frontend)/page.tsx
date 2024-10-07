
import Timeline from "./profile/_components/Timeline";
import { getAllPosts } from "@/services/PostService";

export default async function Home() {
  let query = {
    limit: 20,
  };

  const { data: posts } = await getAllPosts(query);

  return (
    <section className="flex max-w-7xl mx-auto gap-4 py-8 md:py-10">
      <div className="hidden md:block">Left Bar</div>
      <div className="inline-block max-w-3xl mx-auto justify-center">
      
          <Timeline datas={posts} />
      
      </div>
      <div className="hidden md:block">Right Bar</div>
    </section>
  );
}
