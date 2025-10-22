const Pass = () => {
    return (
      <>
       <main className="flex flex-col content-center items-center  justify-center ">
         <div className="absolute inset-0 bg-white/70"></div>

      <header className="relative flex items-center py-6 ">
        <h1 className="text-5xl font-extrabold text-red-600 tracking-tight pr-250">
          NETFLIX
        </h1>
        <div className="flex gap-4">
          <button className="font-medium text-sm">
            Sair 
            </button>
        </div>
      </header>
          
          <div className="relative flex flex-col pt-40 w-130 flex-1 px-2 py-60 ">
            <p className="text-sm font-small">Passo <strong>1</strong> de <strong>3</strong></p>
            <p className="text-4xl font-bold">Crie uma senha</p>
            <br />
            <p className="text-base font-medium">Crie uma senha para acessar sua conta. Ela deve ter pelo menos 6 caracteres.</p>
             <br />
             <input type="password" placeholder="Senha" className="px-4 py-2 border border-gray-300 rounded w-full text-lg"/>
             <br />
             <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded text-3xl"><a href="../Assinatura">Continuar</a></button>
          </div>
        </main>
        </>
    )
}

export default Pass;