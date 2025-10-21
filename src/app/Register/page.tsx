import React from "react";


const Register = () => {
    return (
        <>
       
         <div className="absolute inset-0 bg-white/70"></div>

      <header className="relative z-10 flex justify-between items-center px-30 py-6">
        <h1 className="text-5xl font-extrabold text-red-600 tracking-tight pr-15">
          NETFLIX
        </h1>
        <div className="flex gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded">
            Entrar
          </button>
        </div>
      </header>
          
          <div className="w-96 relative z-10 flex flex-col content-center items-center text-center flex-1 px-2 py-60 border-4 border-indigo-500">
            <p className="text-sm">Passo <strong>1</strong> de <strong>3</strong></p>
            <p>Termine de configurar sua conta</p>
            <p>Enviaremos um link de inscrição para vidapostuna@gmail.com.
             Você poderá usar a Netflix sem senha em qualquer aparelho, quando quiser.</p>
             <button>Enviar link</button>
          </div>
        
        </>
    )
}

export default Register;