import { useState, useRef } from "react";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  console.log('Render');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(e){
    e.preventDefault();
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />

        <input
          type="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
