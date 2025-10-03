import styles from "./Subscribe.module.css";

import { Logo } from "../../components/Logo";
import { useCreateSubscriberMutation } from "../../graphql/generated";

import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Subscribe.css";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className={styles["subscribe-container"]}>
      <div className={styles["subscribe-content"]}>
        <div className={styles["subscribe-text"]}>
          <Logo />

          <h1>
            Construa uma <strong>aplicação completa</strong>, do zero, com{" "}
            <strong>React JS</strong>
          </h1>
          <p>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className={styles["subscribe-form-wrapper"]}>
          <strong>Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className={styles["subscribe-form"]}>
            <input
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button type="submit" disabled={loading}>
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className={styles["subscribe-image"]} alt="" />
    </div>
  );
}
