import { useState, useEffect } from "react";
import Card from "./Card"

function Home(props) {

  const baseURL = "https://pokeapi.co/api/v2/pokemon"

  const [pokeList, setPokeList] = useState(null);  

  useEffect(() => {
    if (!pokeList) {
      fetch(baseURL)
        .then((res) => res.json())
        .then((jsonObj) => {
          setPokeList(jsonObj);
        });
    } else if (
      (props.offset &&
        props.offset === 
          parseInt(pokeList.next.split("?")[1].split("&")[0].split("=")[1])) ||
        props.offset + 40 === 
          parseInt(pokeList.next.split("?")[1].split("&")[0].split("=")[1])
      ) {
          fetch(baseURL + `?offset=${props.offset}`)
            .then((res) => res.json())
            .then((jsonObj) => {
              setPokeList(jsonObj);
            });
      }
  });

  return(
    <div id="gallery">
      {pokeList && pokeList.results.map((pokemon) => {
        return <Card name={pokemon.name} url={pokemon.url} />
      })}
    </div>
  )
}

export default Home
