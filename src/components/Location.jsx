import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  return (
    <section className="py-2 overflow-x-hidden  ">
      <article className="mb-16 sm:mb-36 ">
        <div className=" px-2 flex justify-center -my-[120px] sm:-my-[240px]  ">
          <img
            className=" animate-pulse  w-[250px] h-[250px] sm:h-[600px]  sm:w-[600px] "
            src="img/circlericky.svg"
            alt=""
          />
          <div className="headerBackground sm:w-[400px] sm:h-[400px] absolute ">
            {" "}
          </div>
        </div>

        <div className=" relative flex px-2 justify-center my-10 ">
          <img
            className="h-[80px] w-[250px] sm:h-[200px]  sm:w-[550px] -my-[40px] sm:-my-[100px]"
            src="/img/titlericky.png"
            alt=""
          />
        </div>
      </article>

      <form
        onSubmit={handleSubmit}
        className="flex   py-14 justify-center gap-2 "
        action=""
      >
        <input
          placeholder="Type location..."
          name="idLocation"
          className="text-white  w-60 outline-none px-1 border-[1px] rounded-sm bg-green-950  border-green-900/75"
          type="number"
          min="1" max="126"
          required
          
          
        />
        
        <button
          type="submit"
          className={` rounded-sm flex gap-1 h-8 items-center justify-center border-[1px] px-1 bg-green-950  hover:bg-green-600/95 border-green-900/75 `}
        >
         <div className="ocultar mostrar mt-[43px]">Search</div>  <IconSearch size={16} />
        </button>
      </form>

      {/* location info */}
      <section className="grid max-w-[870px] mx-auto py-3 sm:border-[1px] border-green-800 ">
        <h3 className="flex justify-center text-green-600 font-['fira-code'] text-xl">
          ¡ Welcome to {location?.name} !
        </h3>
        <ul className="flex gap-12 justify-center items-center py-2 h-14 text-slate-500 font-['fira-code'] mostrar ocultar ">
          <li>Type: {location?.type}</li>
          <li>Dimension: {location?.dimension}</li>
          <li>Population: {location?.residents.length}</li>
        </ul>
        <div className="flex relative  justify-center animate-bounce text-green-700 ">
          
            <div className="flex flecha w-8 items-center"></div>
          
        </div>
      </section>
    </section>
  );
};
export default Location;
