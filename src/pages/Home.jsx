import React from "react";
import Card from "../components/Card";
import WelcomeBlock from "../components/WelcomeBlock";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: null
    }
  }

  async componentDidMount() {

    // Simulate a 2 sec latency from the server
    await new Promise(r => setTimeout(r, 2000));

    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then((data) => {

        // Easily debug our app
        // debugger;

        this.setState({ data: data.results })
      })
    
    
  }

  render() {
    return (
      <main style={{textAlign: 'center'}}>
        <h1 
          onClick={() => this.setState({show: !this.state.show})}
        >
          My Class Components
        </h1>
        {
          this.state.show && <WelcomeBlock />
        }
        {
          this.state.data ? <Card data={this.state.data} /> : <h3>Loading ...</h3>
        }
      </main>
    )
  }
}

export default Home;
