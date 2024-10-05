"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Input,
  Divider,
  Image,
} from "@nextui-org/react";
import { Camera, Images, Smile } from "lucide-react";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
import { useRouter } from "next/navigation";

import TRRichTextEditor from "../forms/TRRichTextEditor";

import { useUser } from "@/context/user.provider";
import { useCreatePosts } from "@/hooks/posts.hook";

const CreateNewPostModal = () => {
  const router = useRouter();
  const { user } = useUser();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editorContent, setEditorContent] = useState("");

  const { mutate: handleCreatePost, isPending, isSuccess } = useCreatePosts();

  const [images, setImages] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const [videoId, setVideoId] = useState("");
  const [tags, setTags] = useState<string[] | []>([]);
  const [category, setCategory] = useState('');

  

  const handleTags = (data:string) => {
    const splitData = data?.split(",");

    const tagsData = splitData.filter((i: string) => i !== "");
  
    setTags(tagsData);
  };


 
  const handleCategory =(data:string)=>{

    setCategory(data)

  }

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

   console.log(tags,category);
   
    
    const postDetails = {
      user: user!._id,
      postContent: editorContent,
      video: videoId,
      tags: tags,
      category:category
    };

    formData.append("data", JSON.stringify(postDetails));

    for (let image of images) {
      formData.append("images", image);
    }

    handleCreatePost(formData);
  };

  const handleModal = () => {
    if (user) {
      onOpenChange();
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <div
        className="w-full p-5 space-y-4 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={handleModal}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleModal();
          }
        }}
      >
        <p>Create New Post</p>
        <p className="p-2 rounded-xl border dark:bg-slate-700/75 bg-sky-100/45 xl:min-w-5xl w-full">
          create new post
        </p>

        <div className="flex md:text-sm text-[10px] gap-2 items-center md:gap-8">
          <p className="flex items-center hover:bg-slate-600/45 rounded-md px-2 p-1">
            {" "}
            <Images className="text-green-600" size={18} /> Photo/video
          </p>
          <p className="flex items-center  hover:bg-slate-600/45 rounded-md px-2 p-1">
            {" "}
            <Smile className="text-yellow-600" size={18} /> Feeling/Activity
          </p>
          <p className="flex items-center  hover:bg-slate-600/45 rounded-md px-2 p-1">
            {" "}
            <Camera className="text-red-600" size={18} /> Live Stream
          </p>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create New Post
              </ModalHeader>
              <ModalBody>
                <div className="bg-slate-300/5 p-4 min-h-40 rounded-md">
                  <TRRichTextEditor onChange={handleEditorChange} />
                  <form>
                    <Input
                      className="my-1.5 "
                      placeholder="please add some tag sperate with comma ','"
                      onChange={(e) => handleTags(e.target.value)}
                    />

                    <select className="w-full   bg-slate-600/20 hover:bg-slate-900/85  p-2 rounded-lg mb-4" onChange={(e)=>handleCategory(e.target.value)}>
                      <option value={"category"} disabled selected>
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
                      <option value="cultural-insights">
                        Cultural Insights
                      </option>
                    </select>
                  </form>

                  {imagePreviews.length ? (
                    <>
                      {" "}
                      <div className=" grid gap-2 items-center grid-cols-2">
                        {imagePreviews?.map((img, i) => (
                          <Image key={i} alt="pre" src={img} />
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
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={handleSubmitPost}
                  onPressEnd={onClose}
                >
                  Post
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateNewPostModal;
