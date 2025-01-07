function Maindash() {
  return (
    <div className="grid md:grid-cols-2 md:grid-flow-col grid-row-2 gap-0">
      {/* Parte del grafico */}
      <div className="sm:w-auto xl:w-[900px] h-96 mt-6 sm:ml-6 border-2 border-black-100 rounded-xl">
        <h1>Aqui va el grafico</h1>
      </div>

      {/* Parte de los filtros */}
      <div className="sm:w-auto h-[450px] mt-6 xl:ml-96 sm:ml-6 mr-6 border-2 border-black-100 rounded-xl">
        <h1 className="text-3xl mt-3 ml-6 font-bold">Filtros</h1>

        {/* PARTE FORM 1 */}
        <div className="mr-2 ml-2 mt-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Estaciones
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>

        {/* PARTE FORM 2 */}
        <div className="mr-2 ml-2 mt-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Región
          </label>
          <select className="bg-white  shadow-lg border text-black text-sm rounded-lg w-full p-2.5">
            <option>
              Really long esto es un aprueba dwekfodoe
            </option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        
        {/* PARTE FORM 2 */}
        <div className="mr-2 ml-2 mt-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Marca
          </label>
          <select className="bg-white  shadow-lg border text-black text-sm rounded-lg w-full p-2.5">
            <option>Shell</option>
            <option>Copec</option>
            <option>Petrobras</option>
          </select>
        </div>

        
        {/* PARTE FORM 2 */}
        <div className="mr-2 ml-2 mt-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Tipo Bensina
          </label>
          <select className="bg-white  shadow-lg border text-black text-sm rounded-lg w-full p-2.5">
            <option>Gasolina</option>
            <option>Diesel</option>
            <option>Premium</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Maindash;
