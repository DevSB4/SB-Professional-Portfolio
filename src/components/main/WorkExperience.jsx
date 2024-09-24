const workExperienceData = [
  {
    startDate: 'June 2023',
    endDate: 'Present',
    companyName: 'ES Operations',
    jobTitle: 'Integration Specialist',
    description: [
      'Responsibilities include processing and cleaning data, supporting mission-critical systems such as enterprise administrative software, as well as providing support to other teams and departments.',
    ],
    responsibilities: [
      'Led cross-functional collaboration initiatives to address data issues promptly, resulting in a significant reduction in processing time.',
      'Enforced and upheld privacy and security protocols to protect sensitive data, ensuring 100% adherence to industry standards.',
      'Executed advanced troubleshooting techniques, maintaining data integrity and system stability, which decreased data duplications.',
      'Processed and sanitized complex data from diverse channels, enhancing data integrity and reducing database errors.',
      'Optimized data processes by identifying and processing over 4,000 entries, reducing redundancies and increasing system efficiency.',
    ],
  },
  {
    startDate: 'January 2018',
    endDate: 'July 2022',
    companyName: 'Systems & Imaging',
    jobTitle: 'Business Analyst',
    description: [
      'Responsibilities included supporting enterprise software systems, facilitating talks with technical teams, triaging support requests, resolving data discrepancies, troubleshooting software issues, communicating with end-users via Salesforce CRM, and participating in testing and validation.',
    ],
    responsibilities: [
      'Spearheaded the development of web-based tools through independent initiatives, driving operational efficiencies.',
      'Expanded and developed knowledge articles, fostering continuous improvement and enhancing team collaboration.',
      'Conducted comprehensive data audits and quality assessments, identifying and critical data discrepancies and improving data accuracy.',
      'Facilitated clear communication among staff, leadership, and technical teams, resulting in enhanced project outcomes.',
      'Ensured software reliability by conducting thorough testing across production environments, reducing post-deployment issues.',
      'Applied innovative problem-solving strategies to tackle complex business challenges, achieving notable efficiency gains.',
      'Managed multiple projects simultaneously, consistently delivering on schedule and demonstrating exceptional multitasking abilities.',
    ],
  },
  {
    startDate: 'October 2015',
    endDate: 'January 2018',
    companyName: 'Chief Information Officer Operations	',
    jobTitle: 'Systems Specialist',
    description: [
      'Offered technical support to all levels of interdepartmental faculty, staff, and students via ServiceNow CRM, troubleshot issues, processed service requests, maintained knowledge base articles, and ensured appropriate follow-through.',
    ],
    responsibilities: [
      'Developed and maintained internal documentation for enterprise software systems, improving team knowledge sharing.',
      'Demonstrated adept task management in high-pressure, fast-paced environments, consistently achieving a high-resolution rate.',
      'Enhanced intercultural fluency in interactions with customers, contributing to an increase in customer satisfaction.',
    ],
  },
];

const WorkExperience = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <h1 tabIndex='0' className='text-2xl font-normal'>
          Work Experience
        </h1>
        <ol className='relative border-s border-gray-200 dark:border-[#3a3a3a]'>
          {workExperienceData?.map((item, index) => (
            <li key={index} className='text-base mb-10 ms-4'>
              <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#3a3a3a]'></div>
              <time className='mb-1 text-sm leading-none text-gray-400 dark:text-[#888888]'>
                {item.startDate} - {item.endDate}
              </time>
              <h3 className='text-lg font-medium'>
                {item.jobTitle} | {item.companyName}
              </h3>
              <p className='mb-2'>{item.description}</p>
              <ul className='list-disc ml-4'>
                <li>
                  <p className='mb-4 text-base'>
                    {item.responsibilities.map((item, index) => (
                      <li className='mb-1' key={index}>
                        {item}
                      </li>
                    ))}
                  </p>
                </li>
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default WorkExperience;
