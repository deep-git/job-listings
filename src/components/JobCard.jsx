import React from 'react'

const JobCard = ({job, handleFilters}) => {

  return (
    <section className="flex w-full bg-white min-h-52 mb-10 lg:mb-7 rounded-lg relative px-5 pt-10 pb-5 sm:pt-0 sm:pb-0 sm:mt-16 lg:items-center lg:mt-0 lg:min-h-40 shadow-[0px_10px_10px_hsla(180,29%,50%,0.2)]">

        {job.featured && (
            <div className="w-[6px] h-full bg-desaturated_darkcyan rounded-bl-lg rounded-tl-lg absolute left-0 top-0"/>
        )}

        <img src={`/job-listings${job.logo}`} alt={`${job.company} Logo`} className="absolute w-14 -top-7 left-7 sm:w-20 sm:-top-10 lg:relative lg:top-0 lg:left-0 lg:h-20 lg:w-20 lg:ml-4"/>

        <div className="flex flex-col sm:flex-row w-full">
            {/* JOB INFO */}
            <div className="flex flex-col border-b-[2px] sm:justify-center sm:border-none sm:w-[50%] sm:items-center lg:items-start lg:ml-5 lg:w-[40%]">
                <div className="flex font-bold flex-wrap">
                    <h2 className="text-desaturated_darkcyan">{job.company}</h2>
                    {job.new && <p className="text-white bg-desaturated_darkcyan ml-5 px-2 rounded-xl uppercase text-sm flex items-center">New!</p>}
                    {job.featured && <p className="text-white bg-verydark_grayish_cyan ml-3 px-2 rounded-xl uppercase text-sm flex items-center">Featured</p>}
                </div>
                <h3 className="mt-2 text-md font-bold lg:text-xl lg:mt-1 hover:text-desaturated_darkcyan hover:cursor-pointer">{job.position}</h3>
                <div className="flex mt-2 pb-2 text-dark_grayish_cyan font-[500] items-center lg:mt-1">
                    <p>{job.postedAt}</p>
                    <div className="w-[4px] h-[4px] mx-3 rounded-full bg-dark_grayish_cyan"></div>
                    <p>{job.contract}</p>
                    <div className="w-[4px] h-[4px] mx-3 rounded-full bg-dark_grayish_cyan"></div>
                    <p>{job.location}</p>
                </div>
            </div>

            {/* JOB TAGS */}
            <div className="flex flex-wrap text-desaturated_darkcyan font-bold mt-3 gap-3 sm:flex-col w-full sm:w-[50%] sm:mb-3 sm:justify-center text-center lg:flex-row lg:w-[60%] lg:mr-5 lg:h-auto lg:mt-0 lg:items-center lg:justify-end">
                <p className="job-tags" onClick={() => handleFilters(job.role)}>{job.role}</p>
                <p className="job-tags" onClick={() => handleFilters(job.level)}>{job.level}</p>
                {job.languages.map((language) => (
                    <p key={language} className="job-tags" onClick={() => handleFilters(language)}>{language}</p>
                ))}
                {job.tools.map((tool) => (
                    <p key={tool} className="job-tags" onClick={() => handleFilters(tool)}>{tool}</p>
                ))}
            </div>
        </div>
    </section>
  )
}

export default JobCard