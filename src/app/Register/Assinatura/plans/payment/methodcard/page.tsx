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

        <div className="relative flex flex-col pt-10 w-130 flex-1 px-2">
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
              className="border-2 border-gray-400 rounded-lg px-4 py-6"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/AA"
                className="border-2 border-gray-400 rounded-lg px-4 py-4 w-150"
              />
              <input
                type="text"
                placeholder="CVV"
                className="border-2 border-gray-400 rounded-md px-4 py-4 w-150"
              />
            </div>
            <input
              type="text"
              placeholder="Nome do titular do cartão"
              className="border-2 border-gray-400 rounded-lg px-4 py-4 "
            />
            <p>Forma de pagamento preferida</p>
            <div className="flex gap-6">
              <div className="flex w-90 gap-4 border-2 border-gray-400 rounded-lg px-4 py-4 ">
                <input type="checkbox" name="credito" id="credit" />
                <p>Crédito</p>
              </div>
              <div className="flex w-90 gap-4 border-2 border-gray-400 rounded-lg px-4 py-4 hover:border-gray-950 cursor-pointer ">
                <input type="checkbox" name="debito" id="debit" />
                <p>Débito</p>
              </div>
            </div>
            <div className="flex pt-4 pb-6">
              <p>R$ 44,90/mês</p>
              <p>Padrão</p>
              <div>
                <a href="../">Trocar</a>
              </div>
            </div>
            <p>
              Cartões que suportam transações de debitos e de credito poderão
              ser processados de ambas as formas.
            </p>
            <p>
              Ao marcar a caixa de seleção abaixo, você concorda com nossos{" "}
              <a href="#">Termos de Uso</a> e com nosso{" "}
              <a href="#">Declaração de Privacidade</a> e confirma ter mais de
              18 anos. A Netflix renovará automaticamente sua assinatura e
              cobrará o preço da assinatura (atualmente R$ 44,90/mês) da sua
              forma de pagamento até você cancelar. Você podecancelar quando
              quiser para evitar cobranças futuras.
            </p>
            <div className="flex gap-4">
            <input type="checkbox" />
            <p>Eu concordo</p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded text-3xl mt-4">
              <a href="/Gerenperfis">Iniciar assinatura</a>
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
export default methodcard;
