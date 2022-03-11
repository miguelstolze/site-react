import {useState} from "react";

function Form() {
  function cdt_user(e) {
    e.preventDefault();
    console.log("Adicionou!");
    console.log(`nome do usuario é ${name} e a senha é ${password}`)
  }


  const [name, setName ] = useState()
  const [password, setPassword] = useState()

  return (
    <form onSubmit={cdt_user}>
      <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Cadastrar" />
      </div>
    </form>
  );
}

export default Form;
