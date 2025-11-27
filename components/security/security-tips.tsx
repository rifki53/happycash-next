import Image from 'next/image';

// Define the type for a single security tip
interface Tip {
  icon: string;
  title: string;
  points: string[];
}

// Array of security tips data
const securityTips: Tip[] = [
  {
    icon: '/images/security/1@2x.png',
    title: 'Guard Your Personal Details',
    points: [
      'Never share your account information, OTPs, or ID documents with anyone.',
      'We will never ask for OTPs via phone, SMS, or social media.',
    ],
  },
  {
    icon: '/images/security/2@2x.png',
    title: 'Report Suspicious Activity',
    points: [
      'If you notice any unusual activity or receive suspicious messages, contact us through official channels right away.',
    ],
  },
  {
    icon: '/images/security/3@2x.png',
    title: 'Beware of Fake Repayment Methods',
    points: [
      'Only repay through our official app or designated channels. Do not trust unofficial repayment methods suggested by others.',
      'Our official contact details are only provided within the app, official social media or on our website.',
    ],
  },
  {
    icon: '/images/security/4@2x.png',
    title: 'Verify Official Accounts & Websites',
    points: [
      'Always use our official app and website. Be cautious of fake websites or social media accounts pretending to be us.',
      'Our official contact details are only provided within the app, official social media or on our website.',
    ],
  },
];

export default function SecurityTips() {
  return (
    <section className="relative bg-custom-slate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center pb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            To protect your funds and personal information,{' '}
            <span className="text-custom-yellow">please follow these important tips</span>
          </h2>
        </div>

        {/* Grid of Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex items-start space-x-5"
            >
              <div className="flex-shrink-0">
                <Image
                  src={tip.icon}
                  alt={`${tip.title} icon`}
                  width={80}
                  height={80}
                  className="w-20 h-auto md:w-30 md:h-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  {tip.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
