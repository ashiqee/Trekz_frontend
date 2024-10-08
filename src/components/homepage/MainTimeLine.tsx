"use client"; // Ensure this is a client component

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/button";
import { FilterXIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { useGetAllPost } from "@/hooks/posts.hook";
import Timeline from "@/app/(frontend)/profile/_components/Timeline";

interface QueryState {
  category?: string;
  sortBy?: string;
  isPremium?: boolean;
}

const MainTimeline = ({postSData}:{postSData:any}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: posts, mutate: fetchPosts, isPending } = useGetAllPost();
  const postDatas = posts?.data || [];
  const [query, setQuery] = useState<QueryState>({
    category: undefined,
    sortBy: undefined,
    isPremium: false, // Set a default value
  });

  useEffect(() => {
    return fetchPosts(query);
  }, [query, fetchPosts]);

  const resetFilters = () => {
    setQuery({});
    router.push("");
  };

  const updateQueryParams = (params: Record<string, unknown>) => {
    const newParams = new URLSearchParams(searchParams.toString());

    // Update parameters based on the passed params object
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value as string);
      } else {
        newParams.delete(key);
      }
    });

    router.push(`?${newParams.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    setQuery((prev) => ({ ...prev, category }));
    updateQueryParams({ category });
  };

  const handleSortChange = (sortBy: string) => {
    setQuery((prev) => ({ ...prev, sortBy }));
    updateQueryParams({ sortBy });
  };

  const handlePremiumToggle = () => {
    setQuery((prev) => ({ ...prev, isPremium: !prev.isPremium }));
    updateQueryParams({ isPremium: !query.isPremium });
  };

  return (
    <>
      <div className="p-5 my-4 rounded-lg bg-slate-700/45 flex justify-between items-center max-w-3xl mx-auto ">
        <div>
          <button onClick={resetFilters}>
            <FilterXIcon />
          </button>
        </div>
        <div>
          <select
            className="w-full bg-slate-600/20 hover:bg-slate-900/85 p-2 rounded-lg "
            value={query?.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option disabled value="">
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
        </div>

        <div>
          <select
            className="w-full bg-slate-600/20 hover:bg-slate-900/85 p-2 rounded-lg "
            value={query?.sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="date">Sort by Date</option>
            <option value="upVotes">Sort by Upvotes</option>
            <option value="comments">Sort by Comments</option>
            {/* Add other sorting options as needed */}
          </select>
        </div>

        <Button
          className=" p-2 bg-blue-500 text-white rounded"
          onClick={handlePremiumToggle}
        >
          {query?.isPremium ? "Show All" : "Show Premium"}
        </Button>
      </div>

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <>
          {postDatas.length > 0 ? (
            <Timeline datas={postDatas ? postDatas : postSData} />
          ) : (
            "Not Available Post"
          )}
        </>
      )}
    </>
  );
};

export default MainTimeline;
