const certificateData = [
  {
    certificateDate: 'Expected Dec 2024',
    companyName: 'CompTIA',
    certificateTitle: 'Network+ Certification',
    description: [
      'Validates expertise in networking fundamentals, including troubleshooting, configuration, and management of both hardware and software.',
    ],
    certificateURL: '#',
    issuedBy: 'CompTIA',
    expiryDate: '',
  },
  {
    certificateDate: 'Expected Dec 2024',
    companyName: 'CompTIA',
    certificateTitle: 'Security+ Certification',
    description: [
      'Demonstrates proficiency in cybersecurity skills, such as risk management, threat mitigation, and network security.',
    ],
    certificateURL: '#',
    issuedBy: 'CompTIA',
    expiryDate: '',
  },
  {
    certificateDate: 'Expected Dec 2024',
    companyName: 'EC-Council ',
    certificateTitle: 'Certified Ethical Hacker',
    description: [
      'Certifies advanced skills in identifying and addressing security vulnerabilities through ethical hacking techniques to protect systems and networks from cyber threats.',
    ],
    certificateURL: '#',
    issuedBy: 'EC-Council ',
    expiryDate: '',
  },
];

const Certificates = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <h1 tabIndex='0' className='text-2xl'>
          Certificates
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {certificateData?.map((item, index) => (
            <div key={index} className='flex-1 max-w-xs'>
              <p className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#888888]'>
                {item.companyName} | {item.certificateDate}
              </p>
              <h2 className='text-lg font-medium'>{item.certificateTitle}</h2>

              {item.expiryDate && <p>{item.expiryDate}</p>}
              {/* {item.issuedBy && <p>{item.issuedBy}</p> */}

              {item.description.map((description, index) => (
                <p className='mt-2' key={index}>
                  {description}
                </p>
              ))}
              {/* 
            {item.certificateURL && (
              <a
                href={item.certificateURL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 underline mt-4 block'
              >
                View Certificate
              </a>
            )} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
