import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwodHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();
    if (emailHasError || passwodHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
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
          onChange={handleEmailChange}
          value={emailValue}
          onBlur={handleEmailBlur}
          error={emailHasError && "Please enter a valid email!"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={passwordValue}
          onBlur={handlePasswordBlur}
          error={passwodHasError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
