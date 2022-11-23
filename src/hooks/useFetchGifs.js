import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImage = async () => {
    const data = await getGifs(category);
    setImages(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getImage();
  }, []);

  return {
    images,
    isLoading,
  };
};
