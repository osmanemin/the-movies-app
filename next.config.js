module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  serverRuntimeConfig: {
    mySecret: process.env.ACCESS_KEY,
    baseDomain: process.env.API_URL
  },
  publicRuntimeConfig: {
    accessKey: process.env.ACCESS_KEY,
  },
  experimental: {
    optionalCatchAll: true,
  },
};
