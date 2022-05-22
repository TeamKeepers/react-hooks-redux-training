import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Card = ({ data }) => {

  const dispatch = useDispatch();

  // NEW WAY OF CALLING REDUX STATE THANKS TO HOOKS
  const detailNeeded = useSelector(state => state.detailNeeded);

  return (
    <section>
      <h2>Persona</h2>
      {
        data.map(perso => (
          <div key={perso.id} style={{marginBottom:'20px'}}>
            <img src={perso.image} alt={`${perso.name}'s avatar`} style={{ width: '100px', height: '100px' }} />
            <h3>{perso.name}</h3>
            <em>Status: {perso.status}</em>
            <p>Number of episodes: {perso.episode.length}</p>
            {
              detailNeeded && (
                <>
                  <p style={{color: 'red'}}>Location: {perso.location.name}</p>
                  <button onClick={() => dispatch({type: 'DELETE_PERSONA', payload: perso.id})}>DELETE</button>
                </>
              )
            }
          </div>
        ))
      }
    </section>
  )
}

export default Card;
