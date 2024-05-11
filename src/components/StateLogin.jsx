import { useState } from "react";

export default function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  console.log(userData);

  const emailIsInvalid = didEdit.email && !userData.email.includes("@");

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={userData.email}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
            onBlur={() => handleInputBlur("password")}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
