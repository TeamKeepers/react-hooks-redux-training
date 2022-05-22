import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import WelcomeBlock from "../components/WelcomeBlock";

const Home = () => {

  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchPersonas = async () => {

      // Simulate server latency
      await new Promise(r => setTimeout(r, 2000));

      const result = await fetch('https://rickandmortyapi.com/api/character/');
      const personas = await result.json();
      setData(personas.results);
    }
    
    fetchPersonas()
  }, []);
  // use `show` & check the Network tab in the console

  /**
   * useEffect lifecycle
   * 
   * ComponentDidMount + ComponentDidUpdate
   * useEffect(() => { ... magic gere })
   * 
   * ComponentDidMount
   * useEffect(() => { ... magic gere }, [])
   * 
   * ComponentDidUpdate
   * useEffect(() => { ... magic gere }, [myVarToWatch])
   * 
   * You can use several useEffect in the same component if needed !
   */

  return (
      <main style={{textAlign: 'center'}}>
        <h1 
          onClick={() => setShow(!show)}
        >
          My Functional Components
        </h1>
        {
          show && <WelcomeBlock />
        }
        {
          data ? <Card data={data} /> : <h3>Loading ...</h3>
        }
      </main>
    )
}

export default Home;
