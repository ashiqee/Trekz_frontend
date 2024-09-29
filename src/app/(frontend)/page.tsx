
import Timeline from "./profile/_components/Timeline";

export default function Home() {
  return (
    <section className="flex max-w-7xl mx-auto gap-4 py-8 md:py-10">
    <div className="hidden md:block">
      LeftBar
    </div>
      <div className="inline-block max-w-2xl mx-auto  justify-center">
       
<Timeline/>
      
      </div>

      <div className="hidden md:block">
      Rightn Bar
    </div>
    </section>
  );
}
