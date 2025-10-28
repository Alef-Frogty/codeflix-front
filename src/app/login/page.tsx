import React from "react";

const login = () => {
  return (
    <>
      <main className=" flex flex-col min-h-screen bg-cover bg-center text-white">
        <header className="relative flex justify-between items-center px-50 py-10 z-10">
          <a href="#">
            <h1 className="text-5xl font-extrabold text-red-600 tracking-tight">
              NETFLIX
            </h1>
          </a>
        </header>

        <section className="relative z-10 flex justify-center items-center flex-1 px-4">
          <div className="bg-black bg-opacity-80 p-10 rounded-lg w-full max-w-md border border-gray-700">
            <h2 className="text-3xl font-bold mb-6">Entrar</h2>

            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email ou número de telefone"
                className="bg-gray-800 rounded p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="password"
                placeholder="Senha"
                className="bg-gray-800 rounded p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                id="btn"
                className="bg-red-600 hover:bg-red-700 py-3 rounded font-bold transition duration-300"
              >
                <a href="./Gerenperfis/catalog">Entrar</a>
              </button>

              <div className="flex justify-between items-center text-sm text-gray-400">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" id="check" />
                  <span>Lembre-se de mim</span>
                </label>
                <a href="#" className="hover:underline">
                  Esqueceu a senha?
                </a>
              </div>

              <p className="text-gray-400 text-sm mt-4">
                Primeira vez aqui?{" "}
                <a href="#" className="text-white hover:underline">
                  Assine agora.
                </a>
              </p>

              <p className="text-gray-400 text-xs mt-2">
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô.{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Saiba mais.
                </a>
              </p>
            </form>
          </div>
        </section>

        <footer className="relative z-10 bg-black bg-opacity-80 text-gray-400 text-sm py-4 px-6 border-t border-gray-700">
          <div className="max-w-5xl mx-auto">
            <p className="mb-4">
              Dúvidas? Ligue para{" "}
              <a href="#" className="text-white hover:underline">
                0800 591 8943 (ligação grátis)
              </a>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              <a href="#" className="hover:underline">
                Perguntas frequentes
              </a>
              <a href="#" className="hover:underline">
                Centro de ajuda
              </a>
              <a href="#" className="hover:underline">
                Termos de uso
              </a>
              <a href="#" className="hover:underline">
                Privacidade
              </a>
              <a href="#" className="hover:underline">
                Preferências de cookies
              </a>
              <a href="#" className="hover:underline">
                Informações corporativas
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default login;
