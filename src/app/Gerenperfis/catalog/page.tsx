import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiBellBold } from "react-icons/pi";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdPlay } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import Image from "next/image";

const Catalog = () => {
  return (
    <main className="bg-[url(/backcatanki.jpg)] bg-cover bg-center h-screen text-white relative">
      <header className="flex justify-between items-center px-10 py-4 bg-black/40">
        <div className="flex items-center gap-8">
          <h1 className="text-red-600 font-extrabold text-3xl tracking-tight">
            Netflix
          </h1>
          <ul className="flex gap-4 text-sm">
            <li>
              <a href="#" className="hover:text-gray-300">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Séries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Filmes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Jogos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Bombando
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Minha Lista
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Idiomas
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <HiMagnifyingGlass className="text-xl cursor-pointer" />
          <input
            type="text"
            placeholder="Pesquisar"
            className="bg-transparent border-b border-gray-500 focus:outline-none text-sm w-24 focus:w-40 transition-all"
          />
          <p className="text-sm">Infantil</p>
          <PiBellBold className="text-xl cursor-pointer" />
          <div className="flex items-center gap-1 cursor-pointer">
            <Image
              className="rounded-full"
              src="/imgperfil1.jpeg"
              alt="Perfil"
              width={32}
              height={32}
            />
            <IoMdArrowDropdown />
          </div>
        </div>
      </header>

      <section className="absolute top-1/3 left-10 max-w-md">
        <h2 className="text-4xl font-bold mb-2">Attack on Titan</h2>
        <p className="text-sm text-gray-300 mb-4">
          Depois que um assassino da facção Momotaro mata seu pai adotivo, Shiki
          jura vingança. Mas, primeiro, ele precisa aprender a controlar seu
          sangue Oni.
        </p>
        <div className="flex gap-3">
          <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
            <IoMdPlay /> Assistir
          </button>
          <button className="bg-gray-500/70 px-4 py-2 rounded-md font-semibold hover:bg-gray-400/70 transition">
            <CiCircleInfo /> Mais informações
          </button>
        </div>
      </section>
      <div className="bg-black mt-150 pb-10">
        <section className=" p-10 bg-linear-to-t from-black/80">
          <h2 className="text-2xl font-semibold mb-3">Animes</h2>
          <div className="flex gap-4  overflow-x-hidden overflow-y-hidden">
            <Image
              className="w-80 h-40  object-fill rounded-md hover:scale-105 transition-transform cursor-pointer"
              src="/blueexoscit.jpg"
              alt="Anime 1"
              width={80}
              height={40}
            />
            <Image
              className="w-80 h-40  object-fill rounded-md hover:scale-105 transition-transform cursor-pointer"
              src="/bluelock.jpeg"
              alt="Anime 1"
              width={160}
              height={240}
            />
            <Image
              className="w-80 h-40  object-fill rounded-md hover:scale-105 transition-transform cursor-pointer"
              src="/fullmetal.png"
              alt="Anime 1"
              width={160}
              height={240}
            />
            <Image
              className="w-80 h-40  object-fill rounded-md hover:scale-105 transition-transform cursor-pointer"
              src="/jujutsu.jpg"
              alt="Anime 1"
              width={160}
              height={240}
            />
            <Image
              className="w-80 h-40  object-fill rounded-md hover:scale-105 transition-transform cursor-pointer"
              src="/jujutsu.jpg"
              alt="Anime 1"
              width={160}
              height={240}
            />
            <Image
              className="w-80 h-40  object-fill rounded-md hover:scale-105 transition-transform cursor-pointer"
              src="/jujutsu.jpg"
              alt="Anime 1"
              width={160}
              height={240}
            />
            <Image
              className="w-80 h-40  object-fill rounded-md hover:scale-105 transition-transform cursor-pointer"
              src="/jujutsu.jpg"
              alt="Anime 1"
              width={160}
              height={240}
            />
            <Image
              className="w-80 h-40  object-fill rounded-md hover:scale-105 transition-transform cursor-pointer"
              src="/jujutsu.jpg"
              alt="Anime 1"
              width={160}
              height={240}
            />
            <Image
              className="w-80 h-30  object-fill rounded-md hover:scale-105 transition-transform cursor-pointer"
              src="/jujutsu.jpg"
              alt="Anime 1"
              width={160}
              height={240}
            />
            <button id="btn-preview" className="cursor-pointer">
            <IoIosArrowForward />
          </button>
          </div> 
        </section>
      </div>
    </main>
  );
};

export default Catalog;
