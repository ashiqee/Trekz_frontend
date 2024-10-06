"use server";

import nexiosInstance from "@/config/naxios.config";

export const searchItems = async (searchTerm: string) => {
  try {
    const res = await nexiosInstance.get(`/posts/search?searchTerm=${searchTerm}`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to search items");
  }
};
