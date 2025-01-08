import GraficoMain from "./GraficoMain";

function Maindash() {

  return (
    <div className="grid md:grid-cols-2 md:grid-flow-col grid-row-1 gap-0">
      {/* Parte del grafico */}
        <GraficoMain />
      {/* Parte de los filtros */}
      <div className="sm:w-auto h-[450px] mt-6 xl:ml-80 sm:ml-6 mr-6 border-2 border-[#628185] rounded-xl">
        <h1 className="text-3xl mt-3 ml-6 font-bold text-[#628185]	">Filtros</h1>

        {/* PARTE FORM 1 */}

        {/* PARTE FORM 2 */}
        <div className="mr-2 ml-2 mt-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-[#628185]"
            htmlFor="username"
          >
            Región
          </label>
          <select className="bg-white  shadow-lg border text-black text-sm rounded-lg w-full p-2.5 text-[#628185]">
            <option value = "" disable selected hidden> Selecciona una Región </option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        
        {/* PARTE FORM 2 */}
        <div className="mr-2 ml-2 mt-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-[#628185]"
            htmlFor="username"
          >
            Marca
          </label>
          <select className="bg-white  shadow-lg border text-black text-sm rounded-lg w-full p-2.5 text-[#628185]">
          <option value = "" disable selected hidden> Selecciona una Marca </option>
            <option>Shell</option>
            <option>Copec</option>
            <option>Petrobras</option>
          </select>
        </div>

        
        {/* PARTE FORM 2 */}
        <div className="mr-2 ml-2 mt-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-[#628185]"
            htmlFor="username"
          >
            Tipo Combustible
          </label>
          <select className="bg-white  shadow-lg border text-black text-sm rounded-lg w-full p-2.5 text-[#628185]">
          <option value = "" disable selected hidden> Selecciona el Combustible </option>
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
