import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


const SearchInput = ({ onSearchChange }) => {
    const search = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : "");
    const router = useRouter();
  
    const onSearch = (event) => {
      event.preventDefault();
  
      if (typeof searchQuery !== "string") {
        return;
      }
  
      const encodedSearchQuery = encodeURI(searchQuery);
      router.push(`/search?q=${encodedSearchQuery}`);
    };
  
    const handleChange = (event) => {
      setSearchQuery(event.target.value);
      if (onSearchChange) {
        onSearchChange(event.target.value);
      }
    };
  
    return (
      <form onSubmit={onSearch} className="flex items-center justify-center w-full">
        <div className="flex items-center w-full">
        
        <input
          value={searchQuery || ""}
          onChange={handleChange}
          className="pl-5 pr-3 py-2 w-full text-black bg-grey  rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-25 focus:ring-gray-400 placeholder-gray-500"
          placeholder="Search..."
      />
      <FaSearch className="ml-3 mr-2 text-gray-400 stroke-2" />
      </div>
      </form>
    );
  };
  
  export default SearchInput;