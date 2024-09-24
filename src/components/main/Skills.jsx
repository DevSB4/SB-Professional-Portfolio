const skillsData = {
  professionalSkills: [
    'Analytical Thinking',
    'Stakeholder Management',
    'Time Management',
    'Adaptability',
    'Data Analysis',
    'Customer Service',
    'Communication',
    'Team Leadership',
    'Problem Solving',
    'Technical Documentation',
    'Administrative Support',
    'Cross-Functional Collaboration',
    'Process Improvement',
    'Agile Methodologies',
    'Quality Assurance',
    'Leadership',
    'Intercultural Fluency',
    'Multitasking',
    'Innovation',
    'Operational Efficiency',
    'Continuous Improvement',
    'Team Collaboration',
  ],
  technicalSkills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express',
    'MongoDB',
    'Next.js',
    'Tailwind CSS',
    'Git',
    'REST APIs',
    'Bootstrap',
    'SASS',
    'Responsive Development',
    'JSON Web Tokens (JWT)',
    'Vercel',
    'ShadCN UI',
    'ServiceNow',
    'Oracle PeopleSoft ERP',
    'Salesforce',
    'Hyland onBase',
    'Data Processing and Cleaning',
    'Advanced Troubleshooting Techniques',
    'Data Integrity and System Stability',
    'Data Sanitization',
    'Data Optimization',
    'Web-based Tool Development',
    'Knowledge Base Management',
    'Internal Documentation Development',
    'Enterprise Software System Maintenance',
  ],
};

const Skills = () => {
  return (
    <>
      <div>
        <div className='flex flex-col gap-4'>
          <h1 tabIndex='0' className='text-2xl'>
            Skills
          </h1>

          <h2 className='text-lg'>Professional Skills</h2>
          <div className='flex flex-wrap gap-2'>
            {skillsData.professionalSkills?.map((skill, index) => (
              <span
                key={index}
                className='inline-block rounded-sm text-left px-3 py-1 text-sm bg-muted-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 cursor-default hover:bg-muted-foreground/20'
              >
                {skill}
              </span>
            ))}
          </div>

          <h2 className='text-lg'>Technical Skills</h2>
          <div className='flex flex-wrap gap-2'>
            {skillsData.technicalSkills?.map((skill, index) => (
              <span
                key={index}
                className='inline-block rounded-sm text-left px-3 py-1 text-sm bg-muted-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-50 cursor-default hover:bg-muted-foreground/20'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
