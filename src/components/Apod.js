import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Apod(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  var style = {
    backgroundImage: `url(${data.hdurl})`,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=sH5975twyjJEjrh41EQpbxwXLAVrbUwaElXjYpEw&date=${props.date}`
      )
      .then(res => setData(res.data), setLoading(false))
      .catch(err => console.log(err));
  }, [props.date]);

  console.log("im props", props, "im data ", data);

  return (
    <>
      <div style={style}></div>
    </>
  );
}
