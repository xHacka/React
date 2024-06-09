import { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";

const API = "https://jsonplaceholder.typicode.com/photos";
const IMAGES_LIMIT = 4;

export const Gallery = () => {
  let [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(API, { params: { _limit: IMAGES_LIMIT } })
      .then((data) => setImages(data.data));
  }, []);

  return (
    <main className="gallery">
      {images.map((image) => (
        <div className="gallery-card">
          <img key={image.id} src={image.url} alt={image.title} />
        <p>{image.title}</p>
        </div>
      ))}
    </main>
  );
};
