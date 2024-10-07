import { Select, SelectItem, SharedSelection, Tooltip } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FilterIcon } from "lucide-react";

import { useGetAllPost } from "@/hooks/posts.hook";

const Filtering = ({
  setPostsData,
  categories,
}: {
  setPostsData: any;
  categories: any[];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    mutate: handleGetAllPosts,
    data,
    isPending,
    isSuccess,
  } = useGetAllPost();

  // State management for filtering and sorting
  const [selectCategory, setSelectCategory] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [isPremium, setIsPremium] = useState<boolean>(false);

  // Trigger fetch when category, sortBy, or isPremium changes
  useEffect(() => {
    handleFilteringAndSorting();
  }, [selectCategory, sortBy, isPremium]);

  // Handle filtering and sorting based on state
  const handleFilteringAndSorting = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectCategory) {
      params.set("category", selectCategory);
    }

    // Set sortBy
    if (sortBy) {
      params.set("sortBy", sortBy);
    }

    // Set premium filter
    if (isPremium) {
      params.set("isPremium", "true");
    } else {
      params.delete("isPremium");
    }

    handleGetAllPosts(params);
  };

  // Handle category change
  const handleCategoryChange = (keys: SharedSelection) => {
    const selectedCategory = Array.from(keys)[0] as string; 
    setSelectCategory(selectedCategory || ""); 
  };

  // Handle sort change
  const handleSortChange = (sortOption: SharedSelection) => {
    const selectedSort = Array.from(sortOption)[0] as string; 
    setSortBy(selectedSort || "");
  };

  // Handle premium toggle
  const togglePremium = () => {
    setIsPremium(!isPremium);
  };

  if (isSuccess) {
    setPostsData(data.data);
  }

  return (
    <div className="flex bg-slate-800/45 rounded-lg p-5 gap-4 items-center justify-between">
      <Tooltip content={"clear filter"}>
        <button>
          <FilterIcon />{" "}
        </button>
      </Tooltip>
      {/* Category Filter */}
      <Select
        className="max-w-48"
        aria-label="Select a Category"  // Added aria-label for accessibility
        placeholder="Select a Category"
        selectedKeys={selectCategory}
        variant="faded"
        onSelectionChange={handleCategoryChange}
      >
        {categories?.map((name) => (
          <SelectItem key={name} value={name}>{name}</SelectItem>
        ))}
      </Select>

      {/* Sort Options */}
      <Select
        className="max-w-48"
        aria-label="Sort By"  // Added aria-label for accessibility
        placeholder="Sort By"
        selectedKeys={sortBy}
        variant="faded"
        onSelectionChange={handleSortChange}
      >
        <SelectItem key="publishDate" value={"publishDate"}>Publish Date</SelectItem>
        <SelectItem key="upVote" value={"upVote"}>UpVote</SelectItem>
      </Select>

      {/* Premium Toggle */}
      <button
        className={`px-4 py-[07px] rounded-xl ${isPremium ? "bg-blue-500" : "bg-slate-800"}`}
        onClick={togglePremium}
      >
        {isPremium ? "Show All Posts" : "Show Premium"}
      </button>
    </div>
  );
};

export default Filtering;
