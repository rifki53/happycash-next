const PrivacySection = () => {
  return (
    <section className="bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Centered content container */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Data Security and Privacy Compliance
          </h2>

          {/* Paragraph Text */}
          <p className="text-lg text-gray-600 mb-8">
            In compliance with the{" "}
            <span className="font-bold text-gray-900">
              Data Privacy Act of 2012 (Republic Act No. 10173)
            </span>
            , as well as guidelines set forth by the{" "}
            <span className="font-bold text-gray-900">
              Securities and Exchange Commission (SEC)
            </span>{" "}
            and the{" "}
            <span className="font-bold text-gray-900">
              National Privacy Commission (NPC)
            </span>
            , we are committed to protecting your personal information and
            financial security. Your trust is of utmost importance to us, and we
            implement robust security measures to safeguard your data in
            accordance with the highest standards of confidentiality and
            privacy.
          </p>

          {/* Privacy Agreement Button */}
          <a
            href="/privacy-policy" // Change this to the actual link for your privacy agreement
            className="inline-block bg-[#0A252C] text-custom-yellow font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-800 transition-colors duration-300"
          >
            Privacy Agreement
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
