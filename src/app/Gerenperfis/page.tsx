import Image from "next/image"; 
const Gerenperfis = () => {
    return (
        <>
        <main className="bg-black h-screen flex flex-col justify-center items-center text-white border-2 border-sky-800">
        <h1 className="text-6xl">Quem está assistindo?</h1>
        <div className="flex gap-8 px-8 py-6 justify-center items-center">
            
            <a href="/Gerenperfis/catalog">
            <div className="flex flex-col items-center">
                <Image
                className="rounded-full w-60 h-60 border-0  hover:border-4 border-white cursor-pointer"
                src="/imgperfil1.jpeg"
                alt=""
                width={200}
                height={200}
                />
                <p className="py-2">Usuário 1</p>
            </div>
            </a>
            <a href="/Gerenperfis/catalog">
            <div className="flex flex-col items-center">
                <Image
                className="rounded-full w-60 h-60 border-0  hover:border-4 border-white cursor-pointer"
                src="/imgperfil2.jpeg"
                alt=""
                width={200}
                height={200}
                />
                <p className="py-2">Usuário 2</p>
            </div>
            </a>
            <a href="#">
            <div className="flex flex-col items-center">
                <Image
                className="rounded-full w-60 h-60 border-0  hover:border-4 border-white cursor-pointer"
                src="/imgperfil3.jpeg"
                alt=""
                width={200}
                height={200}
                />
                <p className="py-2">Adicionar perfil</p>
            </div>
            </a>
        </div>
        <a href="#"><button>Gerenciar perfis</button></a>
        
        </main>
        </>
    )
}

export default Gerenperfis;