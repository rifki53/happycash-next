const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.adapundi.com",
        port: "",
        pathname: "/uploads/**", // Izinkan semua path di dalam /uploads
      },
    ],
  },
};

module.exports = nextConfig;
