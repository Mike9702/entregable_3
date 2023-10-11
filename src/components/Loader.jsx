const Loader = () => {
  return (

    <section className=" grid grid-cols-1 justify-items-center  pt-40 ">
               
        <article className="grid gap-y-6 justify-items-center ">
        <img className="animate-bounce" src="/img/iconmorty.png" alt="" /> 
        <div className="loader  "></div>
        <h2 className="  w-40  text-center font-normal font-['fira-code'] text-xl text-green-700">Loading...</h2>    
     
    </article>
  
    </section>
   
  )
}
export default Loader