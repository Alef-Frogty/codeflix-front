const methodprecard = () => {
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

        <div className="relative flex flex-col pt-18 w-130 flex-1 px-2">
          <p className="text-sm font-small">
            Passo <strong>4</strong> de <strong>4</strong>
          </p>
          <p className="text-4xl font-bold">
            Informe o código do cartão pré-pago
          </p>
          <br />

          <form className="flex flex-col gap-4 h-70">
            <input
              type="text"
              placeholder="Número do cartão"
              className="border-2 border-gray-400 rounded-lg px-4 py-4"
            />
          
            <div className="flex pt-4 pb-6">
              <p>R$ 44,90/mês</p>
              <p>Padrão</p>
              <div>
                <a href="../">Trocar</a>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded text-3xl mt-4">
              <a href="/Gerenperfis">Resgatar código do cartão pré-pago</a>
            </button>
            <p className="pt-6 text-sm">
              Esta página é protegida por Google reCAPTCHA para garantir que você
              não é um robô. <a href="#">Saiba mais.</a>
            </p>
          </form>
        </div>
      </main>
    </>
  );
};
export default methodprecard;