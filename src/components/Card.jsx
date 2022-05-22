import React from "react";

class Card extends React.Component {

  render() {
    return (
      <section>
        <h2>Persona</h2>
        {
          this.props.data.map(perso => (
            <div key={perso.id}>
              <img src={perso.image} style={{width: '100px', height: '100px'}}/>
              <h3>{perso.name}</h3>
              <em>Status: {perso.status}</em>
              <p>Number of episodes: {perso.episode.length}</p>
            </div>
          ))
        }
      </section>
    )
  }
}

export default Card;
