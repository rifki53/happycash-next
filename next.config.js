const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.happycash.ph",
        port: "",
        pathname: "/uploads/**", // Izinkan semua path di dalam /uploads
      },
    ],
  },
};

module.exports = nextConfig;
