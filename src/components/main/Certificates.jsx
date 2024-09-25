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
      {/* Container with flex direction for vertical layout */}
      <div className='flex flex-col gap-4'>
        {/* Accessible heading: Added tabIndex for focusability when navigating via keyboard */}
        <h1 tabIndex='0' className='text-2xl'>
          Certificates
        </h1>

        {/* Grid layout for certificates with responsive columns */}
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Map over the certificate data */}
          {certificateData?.map((item, index) => (
            <div key={index} className='flex-1 max-w-xs'>
              {/* Accessible text for company name and certificate date */}
              <p
                className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-[#888888]'
                aria-label={`Certificate issued by ${item.companyName} on ${item.certificateDate}`}
              >
                {item.companyName} | {item.certificateDate}
              </p>

              {/* Accessible heading for each certificate title */}
              <h2
                className='text-lg font-medium'
                aria-label={`Certificate title: ${item.certificateTitle}`}
              >
                {item.certificateTitle}
              </h2>

              {/* Conditional expiry date rendering */}
              {item.expiryDate && (
                <p aria-label={`Expiry date: ${item.expiryDate}`}>
                  {item.expiryDate}
                </p>
              )}

              {/* Conditionally render description list */}
              {item.description.map((description, index) => (
                <p
                  className='mt-2'
                  key={index}
                  aria-label={`Certificate description: ${description}`}
                >
                  {description}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
