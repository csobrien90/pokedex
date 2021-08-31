import { useState, useEffect } from "react";

function Card(props) {
  const [pokeData, setPokeData] = useState(null);
  useEffect(() => {
    if (!pokeData || props.name !== pokeData.species.name) {
      fetch(props.url)
        .then((res) => res.json())
        .then((pokeObj) => {
          setPokeData(pokeObj);
        })
    }
  })
  
  
  return(
    <div className="card">
      { pokeData && (
        <div>
          <h3>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
          <img src={pokeData.sprites.front_default} alt="the pokemon's image" />
          {pokeData.types.map((slot) => {
            return <p>{slot.type.name}</p>;
          })}
        </div>
      )}
    </div>
  )
}

export default Card
