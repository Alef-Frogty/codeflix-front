import React from 'react';

const login = () => {
    return (
        <>
            <h1><a href="#">Netflix</a></h1>

        <div>
            <h2>Entrar</h2>
            <input type="email" name="email" id="em-num" />
            <input type="number" name="Password" id="pass" />

            <button id='btn'>Entrar</button>
                <p><a href="#">Esqueceu a senha?</a></p>

            <input type="checkbox" name="check" id="check"/> <p>Lembre-se de mim</p>
            <p>Primeira vez aqui?<a href="#">Assine agora.</a></p>

            <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.<a href="#">Saiba mais.</a></p>
        </div>

        <footer>
            <p>Duvidas? Ligue para <a href="#">0800 591 8943 (ligação grátis)</a></p>
            <div>
                <a href="#">Perguntas frequentes</a>
                <a href="#">Centro de ajuda</a>
                <a href="#">Termos de uso</a>
                <a href="#">Privacidade</a>
                <a href="#">Preferências de cookies</a>
                <a href="#">Informações corporativas</a>
            </div>

        </footer>
       </>
    )
}

export default login;