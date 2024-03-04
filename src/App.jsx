import { useState } from 'react';
import './App.css';
import data from "./utils/data.json";
import JobCard from "./components/JobCard.jsx";

function App() {

  const [filters, setFilters] = useState([]);
  let filteredJobTags = [];

  function handleFilters(value) {
    if (!filters.includes(value)) {
      setFilters(prev => [...prev, value]);
    }
  }

  function handleRemoveFilter(value) {
    setFilters(prev => prev.filter((item) => item !== value));
  }

  data.forEach(job => {
    let jobFilterTypes = [job.role, job.level, ...job.languages, ...job.tools];
    if (filters.every(type => jobFilterTypes.includes(type))) {
      filteredJobTags.push(job);
    }
  })

  return (
    <main className="min-h-screen font-league_spartan bg-light_grayish_cyan_background">
      <section className="background-container relative">
        <div className="background-image-container"/>

        {filters.length !== 0 && (
          <div className="w-[85%] px-5 py-2 mx-auto min-h-16 bg-white absolute -bottom-8 lg:w-[70%] left-0 right-0 rounded-md shadow-[0px_10px_10px_hsla(180,29%,50%,0.2)] flex items-center flex-wrap">
            {filters && filters.map((item) => (
              <div key={item} className="flex items-center cursor-pointer mr-5 mb-2 bg-light_grayish_cyan_filter h-8 rounded-md overflow-hidden">
                <div className="flex justify-center px-2">
                  <p className=" text-desaturated_darkcyan font-bold">{item}</p>
                </div>
                
                <div onClick={() => handleRemoveFilter(item)} className="flex items-center ml-1 bg-desaturated_darkcyan w-8 h-full justify-center hover:bg-verydark_grayish_cyan">
                  <img src="/job-listings/icon-remove.svg" alt="Remove" />
                </div>
              </div>
            ))}

            <p onClick={() => setFilters([])} className="ml-auto mr-10 text-desaturated_darkcyan font-bold cursor-pointer hover:underline">Clear</p>
          </div>
        )}
      </section>

      <section className="w-[85%] mx-auto mt-20 pb-20 lg:w-[70%]">
        {data && filters.length === 0 && data.map((job) => (
          <JobCard key={job.id} job={job} handleFilters={handleFilters}/>
        ))}

        {filters.length !== 0 && filteredJobTags.length !== 0 && filteredJobTags.map((job) => (
          <JobCard key={job.id} job={job} handleFilters={handleFilters}/>
        ))}
      </section>
    </main>
  )
}

export default App;
