import { useState } from "react";

export default function LogIn({
  facade: apiFacade,
  setLoggedIn,
  setErrorMessage,
}) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    apiFacade.login(
      loginCredentials.username,
      loginCredentials.password,
      setLoggedIn,
      setErrorMessage
    );
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
        <p> User username: user, password: sorteper1 </p>
        <p> Admin username: admin, password: sorteper2 </p>
      </form>
    </div>
  );
}
