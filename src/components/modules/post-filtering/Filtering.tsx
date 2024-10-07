"use client"
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useGetAllPost } from "@/hooks/posts.hook";

const Filtering = ({ setPostsData, categories }: { setPostsData: any, categories: any[] }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { mutate: handleGetAllPosts, data, isPending, isSuccess } = useGetAllPost();
    
    // State management for filtering and sorting
    const [selectCategory, setSelectCategory] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>(''); // Sorting by 'publishDate' by default
    const [isPremium, setIsPremium] = useState<boolean>(false);   // Toggle for premium posts

    const categoryValue = Array.from(selectCategory)[0];
    const sortValue = Array.from(sortBy)[0];
   

    // Trigger fetch when category, sortBy, or isPremium changes
    useEffect(() => {
        handleFilteringAndSorting();
    }, [selectCategory, sortBy, isPremium]);

    // Handle filtering and sorting based on state
    const handleFilteringAndSorting = () => {
        const params = new URLSearchParams(searchParams.toString());


        if (selectCategory) {
            params.set("category", categoryValue);
        }
    
        // Set sortBy
        if (sortBy) {
            params.set("sortBy", sortValue);
        }
    
        // Set premium filter
        if (isPremium) {
            params.set("isPremium", "true");
        } else {
            params.delete("isPremium"); // Remove it if false
        }
    

        const stringParams= params.toString();

        handleGetAllPosts(stringParams);
    };

    // Handle category change
    const handleCategoryChange = (category: string) => {
        setSelectCategory(category);
    };

    // Handle sort change
    const handleSortChange = (sortOption: string) => {
        setSortBy(sortOption);
    };

    // Handle premium toggle
    const togglePremium = () => {
        setIsPremium(!isPremium);
    };

    
    

    return (
        <div>
            {/* Category Filter */}
            <Select
                className="max-w-xs"
                label="Select a Category"
                placeholder="Select a Category"
                selectedKeys={selectCategory}
                variant="underlined"
                onSelectionChange={handleCategoryChange}
            >
                {categories?.map((name) => (
                    <SelectItem key={name}>
                        {name}
                    </SelectItem>
                ))}
            </Select>

            {/* Sort Options */}
            <Select
                className="max-w-xs mt-4"
                label="Sort By"
                placeholder="Sort By"
                selectedKeys={sortBy}
                variant="underlined"
                onSelectionChange={handleSortChange}
            >
                <SelectItem key="publishDate">Publish Date</SelectItem>
                <SelectItem key="upVote">UpVote</SelectItem>
            </Select>

            {/* Premium Toggle */}
            <button 
                className={`mt-4 px-4 py-2 rounded ${isPremium ? 'bg-green-500' : 'bg-gray-300'}`}
                onClick={togglePremium}
            >
                {isPremium ? 'Show All Posts' : 'Show Premium Only'}
            </button>
        </div>
    );
};

export default Filtering;
