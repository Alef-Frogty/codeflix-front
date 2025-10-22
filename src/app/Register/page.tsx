import React from "react";


const Register = () => {
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
            <p className="text-sm font-small">Passo <strong>1</strong> de <strong>4</strong></p>
            <p className="text-4xl font-bold">Termine de configurar sua conta</p>
            <br />
            <p className="text-lg font-medium">Enviaremos um link de inscrição para serphurus@gmail.com.
             Você poderá usar a Netflix sem senha em qualquer aparelho, quando quiser.</p>
             <br />
             <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded text-3xl"><a href="./Register/Verifemail">Enviar Link</a></button>
          </div>
        </main>
        </>
    )
}

export default Register;