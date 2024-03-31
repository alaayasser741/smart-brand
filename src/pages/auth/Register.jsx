import { Link } from "react-router-dom";
import {
  LogoIcon,
  EmailIcon,
  LockIcon,
  BagIcon,
} from "../../assets/icons/icons";
import styles from "../../styles/Login.module.css";

const Register = () => {
  return (
    <main className={styles.main__login}>
      <div className={styles.left__side_register}>
        <div className={styles.logo__img}>
          <LogoIcon alt="Logo" />
        </div>
      </div>
      <div className={styles.right__side}>
        <form>
          <div className={styles.login__title}>
            <h1>Register your account</h1>
            <span>Fill the details below to submit register account.</span>
          </div>

          <div className={styles.form__groups_name}>
            <div className={styles.form__group}>
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Your first name"
              />
            </div>
            <div className={styles.form__group}>
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className={styles.form__group}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              aria-label="Email"
            />
            <span className={styles.input__icon}>
              <EmailIcon alt="Email Icon" />
            </span>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="position">Position</label>
            <select name="position" id="position">
              <option value="" disabled selected>
                Select your position
              </option>
              <option value="receptionist">Receptionist</option>
              <option value="nursing">Nursing</option>
              <option value="Accountant">Accountant</option>
              <option value="doctor">Doctor</option>
            </select>
            <span className={styles.input__icon}>
              <BagIcon alt="Position Icon" />
            </span>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              aria-label="Password"
            />
            <span className={styles.input__icon}>
              <LockIcon alt="Password Icon" />
            </span>
          </div>
          <p className={styles.register__privacy}>
            By signing in, you agree to our{" "}
            <a href="#!" aria-label="Terms and Conditions">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#!" aria-label="Privacy Policy">
              Privacy Policy
            </a>
            .
          </p>
          <button type="submit">Continue</button>
          <div className={styles.signup__link}>
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
