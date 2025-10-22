const plans = () => {
    return (
        <>
       <main className="flex flex-col content-center items-center  justify-center ">
         
 
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
          <div className=" border-4 border-indigo-500">
             <p className="text-sm font-small">Passo <strong>3</strong> de <strong>4</strong></p>
            <p className="text-4xl font-bold">Escolha o melhor plano para você</p>
            <div className="flex
            ">
            <div>
                <div>
                    <h2>Padrão com anúncios</h2>
                    <p>1080p</p>
                </div>
                <p>Preço Mensal</p>
                <p>R$ 20,90</p>
                <p>Qualidade de video e áudio</p>
                <p>Boa</p>
                <p>Resolução</p>
                <p>1080p (Full HD)</p>
                <p>Aparelhos compatíveis</p>
                <p>TV, computador, celular, tablet</p>
                <p>Aparelhos para assistir ao mesmo tempo na sua residência</p>
                <p>2</p>
                <p>Aparelhos de download</p>
                <p>2</p>
                <p>Anúncios</p>
                <p>Menos do que você pensa</p>
            </div>
             <div>
                <div>
                    <h2>Padrão</h2>
                    <p>1080p</p>
                </div>
                <p>Preço Mensal</p>
                <p>R$ 44,90</p>
                <p>Qualidade de video e áudio</p>
                <p>Boa</p>
                <p>Resolução</p>
                <p>1080p (Full HD)</p>
                <p>Aparelhos compatíveis</p>
                <p>TV, computador, celular, tablet</p>
                <p>Aparelhos para assistir ao mesmo tempo na sua residência</p>
                <p>2</p>
                <p>Aparelhos de download</p>
                <p>2</p>
                <p>Anúncios</p>
                <p>Sem anúncios</p>
            </div>
             <div>
                <div>
                    <h2>Premium</h2>
                    <p>4K + HDR</p>
                </div>
                <p>Preço Mensal</p>
                <p>R$ 59,90</p>
                <p>Qualidade de video e áudio</p>
                <p>Superior</p>
                <p>Resolução</p>
                <p>4K(Ultra HD) + HDR</p>
                <p>Áudio espacial (som imersivo)</p>
                <p>Incluso</p>
                <p>Aparelhos compatíveis</p>
                <p>TV, computador, celular, tablet</p>
                <p>Aparelhos para assistir ao mesmo tempo na sua residência</p>
                <p>4</p>
                <p>Aparelhos de download</p>
                <p>6</p>
                <p>Anúncios</p>
                <p>Sem anúncios</p>
            </div>
          </div>
          <p>
           <a href="#"> Saiba mais sobre o plano com anúncios.</a> Ao selecionar um plano com anúncios, você precisará informar sua data de nascimento para a personalização de anúncios e outras finalidades consistentes com a <a href="#"> Declaração de Privacidade </a> da Netflix.

A disponibilidade das opções Full HD (1080p), Ultra HD (4K) e HDR está sujeita ao serviço de internet e à funcionalidade do aparelho. Nem todo conteúdo está disponível em todas as resoluções. Consulte os <a href="#">Termos de Uso</a> para mais detalhes.

Somente as pessoas que moram com você podem usar sua conta. Adicione 1 assinante extra com o plano Padrão ou até 2 com o plano Premium. <a href="#">Saiba mais</a>. Assista em 4 aparelhos ao mesmo tempo com o plano Premium e em 2 aparelhos com o plano Padrão ou Padrão com anúncios.

Os eventos ao vivo fazem parte de todos os planos da Netflix e contêm anúncios.
          </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded text-3xl"><a href="../Register/Assinatura/payment">Proximo</a></button>
          </div>
          
        </main>
        </>
    )
}

export default plans;