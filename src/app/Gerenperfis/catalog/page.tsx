const catalog = () => {
  return (
    <>
      <main>
        <div className=" flex flex-row justify-between items-center pl-6">
          <div className="flex gap-8 pt-4">
            <h1 className="text-red-500 font-bold text-3xl pl-10">
              <a href="#">Netflix</a>
            </h1>
            <ul className="flex flex-row gap-4 pt-2">
              <li><a href=".//">Inicio</a></li>
              <li>Séries</li>
              <li>Filmes</li>
              <li>Jogos</li>
              <li>Bombando</li>
              <li>Minha Lista</li>
              <li>Navegue por idiomas</li>
            </ul>
          </div>
          <input type="text" />
          <p>Infatil</p>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <p>?</p>
          <button>Assistir</button>
          <button>Mais Informações</button>
        </div>
        <div>
          <h2>Animes</h2>
        </div>
      </main>
    </>
  );
};

export default catalog;
