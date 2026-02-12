import { useState } from "react";
import jobs from "../data/jobs.js";
import JobCard from "./JobCard.jsx";
const Filters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  const displayedJobs = jobs
    .filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        categoryFilter === "All" ||
        job.type.toLowerCase() === categoryFilter.toLowerCase();

      const matchesLocation =
        locationFilter === "All" ||
        job.location.toLowerCase() === locationFilter.toLowerCase();

      return matchesSearch && matchesType && matchesLocation;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search for Jobe Role / Company here ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchbar"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="category-filter"
        >
          <option value="All">Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="location-filter"
        >
          <option value="All">Work Location</option>
          <option value="Remote">Remote</option>
          <option value="On-Site">On-Site</option>
          <option value="Hybrid">Hybrid</option>
          <option value="WFO">WFO</option>
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
