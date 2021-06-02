module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  serverRuntimeConfig: {
    mySecret: process.env.REACT_APP_ACCESS_KEY,
  },
  publicRuntimeConfig: {
    accessKey: process.env.REACT_APP_ACCESS_KEY,
  },
  experimental: {
    optionalCatchAll: true,
  },
};
