/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Cette configuration doit être au niveau racine
  images: {
    domains: [], // Ajoutez les domaines nécessaires ici
  },
  async headers() {
    return [
      {
        // Application des en-têtes à toutes les routes
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
