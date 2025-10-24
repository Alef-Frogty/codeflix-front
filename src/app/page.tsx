

export default function Home() 

{
  return (
    
    <main
      className="bg-[url(./img/Background.jpg)] relative flex flex-col h-screen bg-cover bg-center text-white"
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <header className="relative z-10 flex justify-between items-center px-58 py-6">
        <h1 className="text-5xl font-extrabold text-red-600 tracking-tight pr-15">
          NETFLIX
        </h1>
        <div className="flex gap-4">
          <a href="./login">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded">
            Entrar
          </button>
          </a>
        </div>
      </header>

      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-4">
        <h2 className="text-5xl font-extrabold max-w-3xl mb-6 drop-shadow-lg">
          Filmes, séries e muito mais, sem limites
        </h2>
        <p className="text-xl mb-8 max-w-2xl font-bold">
          A partir de R$ 20,90. Cancele quando quiser.
        </p>
        <p className="text-xl mb-8 max-w-2xl ">
          Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
        </p>
        {/* <input type="text" placeholder="Email" className="flex-row"/> */}
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-xl rounded-lg shadow-lg transition">
          <a href="./Register">Vamos lá</a>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32  from-black/80 to-transparent"></div>
    </main>
    
  );
}
