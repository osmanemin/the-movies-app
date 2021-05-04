module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  serverRuntimeConfig: {
    mySecret: process.env.ACCESS_KEY,
  },
  publicRuntimeConfig: {
    accessKey: process.env.ACCESS_KEY,
  },
  experimental: {
    optionalCatchAll: true,
  },
};
