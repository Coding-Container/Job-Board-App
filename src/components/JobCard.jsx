const JobCard = ({ job }) => (
  <div className="job-card">
    <h2 className="job-title">{job.title}</h2>
    <p className="company">{job.company}</p>
    <p className="location">{job.location}</p>
    <p>{job.type}</p>
  </div>
);

export default JobCard;
