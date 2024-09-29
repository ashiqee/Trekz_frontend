
import PostCard from "@/components/cards/PostCard";
import CreateNewPostModal from "@/components/modal/CreatePostModal";

const Timeline = () => {
    return (
        <div className="space-y-4    ">
            <div className="  p-4 bg-sky-900/25 dark:bg-slate-800/45 rounded-md">
            <CreateNewPostModal/>

            </div>

           <div className="grid grid-cols-1 gap-4">
            {
                Array.from({length:5}).map((_,i)=>(

                    <PostCard key={i}/>
                ))
            }
           </div>
        </div>
    );
};

export default Timeline;