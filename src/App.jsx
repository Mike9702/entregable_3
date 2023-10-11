import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomNumber } from "./utils/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";
import Loader from "./components/Loader";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
<main className="backgroundApp h-screen" >
      {location === null ? <Loader /> : <section className="min-h-screen backgroundApp  px-4 text-white items-center ">
        <Location location={location} setLocation={setLocation}/>  
      <ResidentList residents={location?.residents ?? []} />
    </section> }
</main>
    
  );
}

export default App;
