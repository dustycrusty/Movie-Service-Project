import { useParams } from "react-router-dom";
import { useEffect } from "react";
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    let url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  };
  useEffect(() => getMovie());
  return <h1>Detail</h1>;
}

export default Detail;
