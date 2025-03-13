import React from 'react';

const ProfessionalSummary = ({ resumeInfo }) => {
  const experienceList = Array.isArray(resumeInfo?.experience) ? resumeInfo.experience : [];

  return (
    <div className="my-6">
      <h2
        className="text-sm font-bold text-center mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>

      <hr
        className="border-[1.5px] my-2"
        style={{ borderColor: resumeInfo?.themeColor }}
      />

      {experienceList.map((experience, index) => (
        <div key={index} className="my-5">
          {/* Job Title */}
          <h2
            className="font-bold text-sm"
            style={{ color: resumeInfo?.themeColor }}
          >
            {experience?.title}
          </h2>

          {/* Company Info + Date Range */}
          <h2 className="text-xs flex justify-between">
            <span>{experience?.companyName}, {experience?.city}, {experience?.state}</span>
            <span>
              {experience?.startDate} -{' '}
              {experience?.currentlyWorking ? 'Present' : experience?.endDate}
            </span>
          </h2>

          {/* Work Summary with formatted HTML */}
          {experience?.workSummary && (
            <div
              className="text-xs my-2 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: experience?.workSummary
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfessionalSummary;
