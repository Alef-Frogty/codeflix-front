const payment = () => {
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
          <p className="text-4xl font-bold">Escolha como você quer pagar</p>
          <br />
          <p className="text-lg font-medium ">
            Sua forma de pagamento está criptografada e você pode mudá-la quando
            quiser.
          </p>
          <br />
          <p className="text-lg font-bold">Segurança e tranquilidade.</p>

          <p className="text-lg font-bold">Cancele online com facilidade.</p>
          <br />
          <p className="ml-73">Criptografia de ponta a ponta</p>
          <div className="gap-6 flex flex-col mt-6 mb-8">
            <a href="./payment/methodcard">
            <div className="shadow-xl/20 h-25  border-2 border-gray-300 rounded-lg hover:bg-gray-200 cursor-pointer">
                <p className="font-bold text-lg pt-4 pl-4">
                    Cartão de crédito e débito
                </p>
            </div>
            </a>
           <a href="./payment/methodprecard">
         <div className="shadow-xl/20 h-15  border-2 border-gray-300 rounded-lg hover:bg-gray-200 cursor-pointer">
        
            <p className="font-bold text-lg pt-2 pl-4">
                Código do cartão pré-pago
            </p>
            </div>
            </a>
         </div>
        </div>
      </main>
    </>
  );
};
export default payment;
