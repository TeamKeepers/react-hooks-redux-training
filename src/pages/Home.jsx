import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import WelcomeBlock from "../components/WelcomeBlock";

const Home = () => {

  const [show, setShow] = useState(false);

  /**
   * We will not use local state anymore
   * To replace it, we need 2 methods: the data itself and the way to update it
   * data = we will call the useSelector
   * update = we will call the dispatch thanks to useDispatch
   */
  // const [data, setData] = useState(null);
  const data = useSelector(state => state.PersonaList);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchPersonas = async () => {

      // Simulate server latency
      await new Promise(r => setTimeout(r, 2000));

      const result = await fetch('https://rickandmortyapi.com/api/character/');
      const personas = await result.json();
      
      dispatch({
        type: 'ADD_PERSONA_LIST',
        payload: personas.results
      })
    }
    
    fetchPersonas()
  }, [dispatch]);

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
