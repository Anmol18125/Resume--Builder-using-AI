import React from 'react';

const PreviewEducation = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-sm font-bold text-center mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h2>
      <hr
        className="border-[1.5px] my-2"
        style={{ borderColor: resumeInfo?.themeColor }}
      />

      {resumeInfo?.education?.map((education) => (
        <div key={education.id} className="mb-4">
          <h2
            className="font-bold text-sm"
            style={{ color: resumeInfo?.themeColor }}
          >
            {education?.degree} in {education?.major}
          </h2>

          <h2 className="text-xs flex justify-between">
            {education?.universityName}, {education?.city}, {education?.state}
            <span>
              {education?.startDate} {' - '}
              {education?.currentlyStudying
                ? 'Pursuing'
                : education?.endDate || 'N/A'}
            </span>
          </h2>

          {education?.description && (
            <p className="text-xs my-2">{education?.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PreviewEducation;
