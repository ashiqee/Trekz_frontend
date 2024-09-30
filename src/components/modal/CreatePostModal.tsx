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

import TRRichTextEditor from "../forms/TRRichTextEditor";

import { useUser } from "@/context/user.provider";
import { useCreatePosts } from "@/hooks/posts.hook";

const CreateNewPostModal = () => {

  const { user } = useUser();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editorContent, setEditorContent] = useState("");

  const {mutate: handleCreatePost, isPending,isSuccess }= useCreatePosts()

  const [images, setImages] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const [videoId, setVideoId] = useState("");

  

  const handleEditorChange = (editorState: any) => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState); // Convert ContentState to RawDraftContentState
    const htmlContent = draftToHtml(rawContentState); // Convert to HTML

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

    const postDetails ={
      user: user!._id,
      postContent: editorContent,
      video: videoId,
    };

    formData.append('data', JSON.stringify(postDetails));

    for (let image of images) {
      formData.append("images", image);
    }


    console.log(formData);
    
   handleCreatePost(formData)
  };

  

  return (
    <>
      <div
        className="w-full p-5 space-y-4 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onOpen();
          }
        }}
      >
        <p>Create New Post</p>
        <p className="p-2 rounded-xl border dark:bg-slate-700/75 bg-sky-100/45 min-w-5xl w-full">
          create new post
        </p>

        <div className="flex text-sm gap-2 items-center md:gap-8">
          <p className="flex items-center hover:bg-slate-600/45 rounded-md px-2 p-1">
            {" "}
            <Images className="text-green-600" /> Photo/video
          </p>
          <p className="flex items-center  hover:bg-slate-600/45 rounded-md px-2 p-1">
            {" "}
            <Smile className="text-yellow-600" /> Feeling/Activity
          </p>
          <p className="flex items-center  hover:bg-slate-600/45 rounded-md px-2 p-1">
            {" "}
            <Camera className="text-red-600" /> Live Stream
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
                  {/* <TRRichTextEditor 
                  editorState={editorState}
                  handleEditorChange={handleEditorChange}
                  setEditorState={setEditorState} /> */}

                  <TRRichTextEditor onChange={handleEditorChange} />

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
