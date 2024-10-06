import React from "react";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SearchPostModal = ({
  postData,
  setIsOpen,
  reset
}: {
  postData: any;
  setIsOpen: any;
  reset:any
}) => {
  const router = useRouter();

  const handleSeeDetails = (id:string) => {
    router.push(`/post/${id}`);
    setIsOpen([]);
    reset()
  };

  return (
    <>
      <div className="fixed   z-40 inset-0 bg-slate-500/35 top-16 w-full bg-opacity-75  justify-center items-center ">
        <div className="w-[40vw]">
          <div
            className=" relative  z-40 min-w-3xl max-w-3xl mx-auto max-h-[90vh] my-auto 
         rounded-xl p-10 overflow-hidden overflow-y-auto 
          bg-gray-900  text-white "
          >
            <div className="grid grid-cols-1 gap-4">
              {postData?.map((post: any) => (
                <div
                  key={post._id}
                  className="flex shadow-lg bg-slate-600/20 p-5 max-w-2xl px-5 rounded-lg gap-4"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSeeDetails(post._id)}  
                  onKeyPress={() => handleSeeDetails(post._id)}
                >
                  <div>
                    {post.image ? (
                      <Image
                        className="w-20 h-20 object-cover"
                        src={post.image}
                      />
                    ) : (
                      <div className="w-20 h-20 border rounded-lg bg-slate-900/25 flex flex-col justify-center items-center">
                        {" "}
                        no image
                      </div>
                    )}
                    <p className="text-[11px] bg-slate-800/45 rounded-lg mt-2">
                      {post.categories}
                    </p>
                  </div>
                  <div className="max-w-40 text-justify">
                    <div
                      dangerouslySetInnerHTML={{ __html: post.postContent }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPostModal;
