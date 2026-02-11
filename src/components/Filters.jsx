import { useState } from "react";
import jobs from "../data/jobs.js";
import JobCard from "./JobCard.jsx";
const Filters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const displayedJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesLocation =
      locationFilter === "All" ||
      job.location.toLowerCase() === locationFilter.toLowerCase();

    return matchesSearch && matchesLocation;
  });
  return (
    <>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search job role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchbar"
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="location-filter"
        >
          <option value="All">All</option>
          <option value="On-Site">On-Site</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
      <ul className="jobs-list">
        {displayedJobs.map((job) => (
          <li key={job.id}>
            <JobCard job={job} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Filters;
