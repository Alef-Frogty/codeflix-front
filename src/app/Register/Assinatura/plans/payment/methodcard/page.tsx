const methodcard = () => {
  return (
    <>
      <main className="flex flex-col content-center items-center  justify-center ">
        <div className="absolute inset-0 bg-white/70"></div>

        <header className="relative flex items-center py-6 ">
          <h1 className="text-5xl font-extrabold text-red-600 tracking-tight pr-250">
            NETFLIX
          </h1>
          <div className="flex gap-4">
            <button className="font-medium text-sm">Sair</button>
          </div>
        </header>

        <div className="relative flex flex-col pt-20 w-130 flex-1 px-2">
          <p className="text-sm font-small">
            Passo <strong>4</strong> de <strong>4</strong>
          </p>
          <p className="text-4xl font-bold">
            Informe os dados do seu cartão de crédito ou débito
          </p>
          <br />

          <form className="flex flex-col gap-4 h-70">
            <input
              type="text"
              placeholder="Número do cartão"
              className="border-1 border-gray-400 rounded-lg px-4 py-6"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/AA"
                className="border-1 border-gray-400 rounded-lg px-4 py-4 w-150"
              />
              <input
                type="text"
                placeholder="CVV"
                className="border-1 border-gray-400 rounded-md px-4 py-4 w-150"
              />
            </div>
            <input
              type="text"
              placeholder="Nome do titular do cartão"
              className="border-1 border-gray-400 rounded-lg px-4 py-4 "
            />
            <p>
              
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded text-3xl mt-4">
              Iniciar assinatura
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
export default methodcard;
