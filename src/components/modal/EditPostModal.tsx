"use client";
import React, { ChangeEvent, useState } from "react";
import {
  useDisclosure,
  Button,
  Input,
  Divider,
  Image,
} from "@nextui-org/react";
import { Images, X } from "lucide-react";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
import { useRouter } from "next/navigation";

import TRRichTextEditor from "../forms/TRRichTextEditor";

import { useUser } from "@/context/user.provider";
import { useCreatePosts, useUpdatePost } from "@/hooks/posts.hook";
import PostsSkeleton from "../skeletons/PostsSkeleton";
import { toast } from "sonner";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EditPostModal = ({
  postDetails,
  setIsOpen,
}: {
  postDetails: any;
  setIsOpen: any;
}) => {
  const router = useRouter();

  const postId = postDetails?._id!;

  const { user } = useUser();
  const [editorContent, setEditorContent] = useState(postDetails.postContent);

  const { mutate: handleUpdatePost, isPending, isSuccess } = useUpdatePost();

  const [images, setImages] = useState<File[] | []>(postDetails.images);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>(
    postDetails.images
  );
  const [videoId, setVideoId] = useState(postDetails.videoId);
  const [tags, setTags] = useState<string[] | []>(postDetails.tags);
  const [category, setCategory] = useState(postDetails.catergory);

  const handleTags = (data: string) => {
    const splitData = data?.split(",");

    const tagsData = splitData.filter((i: string) => i !== "");

    setTags(tagsData);
  };

  const handleCategory = (data: string) => {
    setCategory(data);
  };

  const handleEditorChange = (editorState: any) => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    setEditorContent(htmlContent);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setImages((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitPost = async () => {
    const formData = new FormData();

    const updatePostDetails = {
      user: user!._id,
      postContent: editorContent ,
      tags: tags ,
      category: category ,
      postId
    };

    formData.append("data", JSON.stringify(updatePostDetails));

    for (let image of images) {
      formData.append("images", image);
    }

    
   handleUpdatePost(formData);


    
  };

 

  const handleRemoveImg = (i: number) => {
    setImagePreviews((prevPreviews) => {
      const updatedPreviews = [...prevPreviews];

      updatedPreviews.splice(i, 1);

      return updatedPreviews;
    });
  };

  return (
    <>
      {/* modal body  */}
      {isPending && <> <PostsSkeleton/> </>}
      <>
        <div className="fixed   z-40 inset-0 bg-slate-500/35 flex flex-col w-full bg-opacity-75  justify-center items-center ">
          <div className="w-[40vw]">
            <div
              className=" relative  z-40 min-w-3xl max-w-3xl mx-auto max-h-[90vh] my-auto 
         rounded-xl p-10 overflow-hidden overflow-y-auto 
          bg-gray-900  text-white "
            >
              <p className="pb-4 text-xl"> Edit Post</p>

              <button
                className="absolute top-10   right-10"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </button>
              <div className="bg-slate-800 p-4 min-h-40 w-full rounded-md">
                <TRRichTextEditor
                  text={postDetails.postContent}
                  onChange={handleEditorChange}
                />
                <form>
                  <Input
                    className="my-1.5 "
                    placeholder={postDetails.tags}
                    onChange={(e) => handleTags(e.target.value)}
                  />

                  <select
                    className="w-full   bg-slate-600/20 hover:bg-slate-900/85  p-2 rounded-lg mb-4"
                    value={postDetails.category}
                    onChange={(e) => handleCategory(e.target.value)}
                  >
                    <option disabled selected value={"category"}>
                      Select category
                    </option>
                    <option value="destinations">Destinations</option>
                    <option value="travel-tips">Travel Tips</option>
                    <option value="activities">Activities</option>
                    <option value="accommodations">Accommodations</option>
                    <option value="transportation">Transportation</option>
                    <option value="travel-themes">Travel Themes</option>
                    <option value="seasonal-travel">Seasonal Travel</option>
                    <option value="travel-planning">Travel Planning</option>
                    <option value="health-safety">Health and Safety</option>
                    <option value="cultural-insights">Cultural Insights</option>
                  </select>
                </form>

                {imagePreviews.length ? (
                  <>
                    {" "}
                    <div className=" grid gap-2 items-center grid-cols-2">
                      {imagePreviews?.map((img, i) => (
                        <div key={i} className="relative">
                          <Image alt="pre" src={img} />
                          <button
                            className="absolute hover:bg-slate-500/45 p-2 rounded-full text-black z-50 right-2 top-2"
                            onClick={() => handleRemoveImg(i)}
                          >
                            <X />
                          </button>
                        </div>
                      ))}
                    </div>
                    <label
                      className="text-center h-10 text-[10px]  rounded-lg flex mt-2 justify-center items-center w-full bg-slate-400/15"
                      htmlFor="images"
                    >
                      <Images size={14} />
                      Add more Photos
                    </label>
                    <Input
                      multiple
                      accept="image/*"
                      className="hidden"
                      id="images"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </>
                ) : (
                  <div>
                    <label
                      className="text-center h-48 flex rounded-lg flex-col justify-center items-center w-full bg-slate-400/15"
                      htmlFor="images"
                    >
                      <Images />
                      Add Photos
                    </label>
                    <Input
                      multiple
                      accept="image/*"
                      className="hidden"
                      id="images"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                )}
              </div>
              <Divider className="my-4" />
              <label htmlFor="video">Add video</label>
              <Input
                id="video"
                placeholder="Only accept youtube video id"
                type="text"
                onChange={(e) => setVideoId(e.target.value)}
              />
              <Button
                className="my-5"
                color="primary"
                onPress={handleSubmitPost}
              >
                Update Post
              </Button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default EditPostModal;
