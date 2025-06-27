import React, { useState, useMemo } from "react";
import { useLoaderData, useNavigation } from "react-router";
import AllGroupCard from "../components/AllGroupCard";

const AllGroup = () => {
  const initialGroups = useLoaderData();
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("newest");

  const filteredGroups = useMemo(() => {
    return initialGroups
      .filter((group) =>
        group.groupname?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortDirection === "newest" ? dateB - dateA : dateA - dateB;
      });

  }, [searchTerm, sortDirection, initialGroups]);

  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold text-center primary my-12 mb-4">
        Showing All Groups
      </h2>

      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by group name..."
          className="input input-bordered w-full md:w-1/3 lg:w-1/4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="select select-bordered w-1/3 md:w-1/4 lg:w-1/5"
          value={sortDirection}
          onChange={(e) => setSortDirection(e.target.value)}
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
        </select>
      </div>

      {/* Display Groups */}
      {filteredGroups.length === 0 ? (
        <p className="text-center text-gray-500">No groups found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
          {filteredGroups.map((group) => (
            <AllGroupCard
              key={group._id}
              allgroup={group}
              allgroups={filteredGroups}
              setGroups={() => {}} // Not needed for display
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllGroup;
