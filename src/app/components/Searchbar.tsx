"use client";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const Searchbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 500);
  const router = useRouter();

  useEffect(() => {
    if (debouncedQuery) {
      router.push(`/shop?search=${encodeURIComponent(debouncedQuery)}`);
    }
  }, [debouncedQuery, router]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <button onClick={() => setShowSearch(!showSearch)}>
        <BiSearch size={20} />
      </button>

      {showSearch && (
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-[#252B42] p-2 ml-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button type="submit">Go!</button>
        </form>
      )}
    </>
  );
};

export default Searchbar;
