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
    };
  
    const handleChange = (event) => {
      setSearchQuery(event.target.value);
      if (onSearchChange) {
        onSearchChange(event.target.value);
      }
    };
  
    return (
      <form onSubmit={onSearch} className="flex items-center justify-center w-auto">
         <div className="relative flex items-center w-full">
        <input
          value={searchQuery || ''}
          onChange={handleChange}
          className="pl-5 pr-10 py-2 w-full text-black bg-dark-grey rounded-full placeholder-login-gray"
          placeholder="Search"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-login-gray stroke-3" />
      </div>
      </form>
    );
  };
  
  export default SearchInput;