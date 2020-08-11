import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-pUEyUkqfqOmcSH_3JHVbQnJhwIzMllyXuBlua=s83-c-mo"
          alt="Jean Silva"
        />
        <div>
          <strong>Jean Silva</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratorios e por mudar a vida das
        pessoas atraves de experiencia.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
