import axios from "axios";
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Qe6sciWni1MY5Xm2Hkdd4zhnYbzCjZR4&q=${category}&limit=10`;
  const response = await axios.get(url);

  const { data = [] } = await response.data;

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
