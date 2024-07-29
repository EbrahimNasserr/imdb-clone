"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`)
  };
  return (
    <form
      className=" flex justify-between items-center px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search Keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" w-full h-14 rounded-md placeholder-gray-500 bg-transparent focus:normal-case outline-none flex-1"
      />
      <button disabled={search === ""}>search</button>
    </form>
  );
}
