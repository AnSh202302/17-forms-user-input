import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  console.log(userData);

  const emailIsInvalid = didEdit.email && !userData.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && userData.password.trim().length < 6;

  function handleSubmit(e) {
    e.preventDefault();
    setUserData({ email: "", password: "" });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setDidEdit((prev) => ({
      ...prev,
      [name]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
          onBlur={() => handleInputBlur("email")}
          error={emailIsInvalid && "Please enter a valid email!"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={userData.password}
          onBlur={() => handleInputBlur("password")}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
