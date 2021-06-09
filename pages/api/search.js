import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default async (req, res) => {
  let data = [];
  if (req.query.q) {
    const fetchedData = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${req.query.q}&api_key=${publicRuntimeConfig.accessKey}`
    ).then((res) => res.json());
    if(!fetchedData.errors){
        data = [...fetchedData.results]
    }
  }
  res.status(200).json(data);
};
