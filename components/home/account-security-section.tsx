import Image from "next/image";

const AccountSecuritySection = () => {
  return (
    // Section utama dengan background gelap dan padding
    <section className="bg-custom-darkgreen flex items-center justify-center min-h-screen p-4">
      {/* Card utama */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden">
        {/* Gambar lingkaran putih sebagai background absolut */}
        {/* URL gambar menggunakan path dari folder public */}
        <Image
          src="/images/data/circle-white@2x.png"
          alt="Background Circle"
          width={500}
          height={500}
          className="absolute -top-20 -left-40 opacity-50" // Posisi absolut di kiri atas
        />

        {/* Konten di dalam card, dibuat di atas background lingkaran */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
          {/* Kolom Kiri: Ikon Security */}
          <div className="flex-shrink-0">
            <Image
              src="/images/data/security@2x.png"
              alt="Account Security Icon"
              width={180}
              height={180}
              className="object-cover"
            />
          </div>

          {/* Kolom Kanan: Teks dan Tombol */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">
              Account & Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In compliance with the Data Privacy Act of 2012 (Republic Act No.
              10173), as well as guidelines set forth by the Securities and
              Exchange Commission (SEC) and the National Privacy Commission
              (NPC), we are committed to protecting your personal information
              and financial security. Your trust is of utmost importance to us,
              and we implement robust security measures to safeguard your data
              in accordance with the highest standards of confidentiality and
              privacy.
            </p>
            <div className="mt-2">
              <button className="bg-gray-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors">
                Safety Tips
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSecuritySection;
