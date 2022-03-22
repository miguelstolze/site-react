import { useState } from "react";

function Condicional() {
  const [ email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();


  function enviar(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail)
  }
  function limparEmail() {
    setUserEmail("")
  }
  return (
    <div>
      <h2>cadastre seu e-mail</h2>
      <form>
        <input
          type="e-mail"
          placeholder="Digite seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviar}>
          Enviar e-mail
        </button>
        {userEmail && (
            <div>
                <p>O E-mail do usuário é: {userEmail}</p>
                <button onClick={limparEmail}>Limpar E-mail</button>
            </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
