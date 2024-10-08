interface FilteringProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  premiumFilter: boolean | null;
  onPremiumFilterChange: (premium: boolean | null) => void;
}

const Filtering: React.FC<FilteringProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  premiumFilter,
  onPremiumFilterChange
}) => {



  
  return (
    <div>
      <select value={selectedCategory || ''} onChange={(e) => onCategoryChange(e.target.value || null)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="date">Sort by Date</option>
        <option value="upvotes">Sort by Upvotes</option>
        <option value="comments">Sort by Comments</option>
      </select>

      <label>
        Premium Only
        <input
          checked={premiumFilter || false}
          type="checkbox"
          onChange={(e) => onPremiumFilterChange(e.target.checked ? true : null)}
        />
      </label>
    </div>
  );
};

export default Filtering;
