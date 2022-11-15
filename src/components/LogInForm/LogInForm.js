import styles from "./LogInForm.module.css";
import "../Form.css";
import "../Button.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const LogInForm = () => {
  const navigate = useNavigate();
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log();
    // Guard clause for empty inputs
    if (
      usernameRef.current.value.trim().length === 0 ||
      passwordRef.current.value.trim().length === 0
    )
      return;

    // Route valid submit to dashboard
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <span className={styles.logocontainer}>
        <img className={styles.logo} src="../img/bug-shield-cropped.png" alt="Logo" />
        <p className={styles.appname}>Bug Tracker</p>
      </span>
      <p className={styles.explanation}>
        Enter any username and password into this demo app to log in.
      </p>
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={onSubmitHandler}
      >
        <input
          autoComplete="false"
          name="hidden"
          type="text"
          style={{ display: "none" }}
        />
        <input
          type="text"
          required
          min="4"
          max="16"
          placeholder="Username"
          className={styles.input}
          ref={usernameRef}
        ></input>
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
          ref={passwordRef}
        ></input>
          <button className="btn btn--primary" type="submit">
            Log in
          </button>
      </form>
    </div>
  );
};

export default LogInForm;
