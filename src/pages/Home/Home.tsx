import { useState } from 'react';
import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscribe($name: String! $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    };
  };
`
export function Home() {
  const navigate = useNavigate();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await createSubscriber({
      variables: {
        name: nameField,
        email: emailField,
      }
    });

    setNameField('');
    setEmailField('');

    navigate('/event');
  }

  function handleNameField(e: React.ChangeEvent<HTMLFormElement>) {
    setNameField(e.target.value);
  }

  return (
    <div className={styles.box}>
      <div className={styles['box-container']}>
        <div className={styles['box-container-left']}>
          <h2>Ignite Lab | REACTJS</h2>
          <h1>Construa uma <strong>aplicação completa</strong>, do zero, com <strong>React JS</strong>.</h1>
          <p>Em apenas uma semana você vai dominar na prática uma das tecnologias mais
            utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className={styles['box-container-right']}>
          <strong>Inscreva-se gratuitamente.</strong>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={nameField}
              onChange={() => handleNameField}
              placeholder='Seu nome completo'
            />

            <input
              type="email"
              value={emailField}
              onChange={(e) => setEmailField(e.target.value)}
              placeholder='Digite o seu e-mail'
            />

            <button disabled={loading} type='submit'>Garantir minha vaga</button>
          </form>
        </div>
      </div>
      <div className={styles['imagem-footer']}></div>
    </div>
  )
}