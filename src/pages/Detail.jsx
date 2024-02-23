import React from "react";
import { useParams ,useFetch } from "react-router-dom";

function Detail() {

  fetch()
const {slug} = useParams()
const {data, isPending , error} = useFetch('https://localhost:3000?=slug'+slug)

  return <div>Detail {slug} </div>;
}

export default Detail;
