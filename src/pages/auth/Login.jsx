import { Link } from "react-router-dom";
import {
  LogoIcon,
  EmailIcon,
  LockIcon,
  FacebookIcon,
  GoogleIcon,
} from "../../assets/icons/icons";
import styles from "../../styles/Login.module.css";

const Login = () => {
  return (
    <main className={styles.main__login}>
      <div className={styles.left__side}>
        <div className={styles.logo__img}>
          <LogoIcon />
        </div>
      </div>
      <div className={styles.right__side}>
        <form>
          <div className={styles.login__title}>
            <h1>Welcome</h1>
            <span>Login to continue</span>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="email">Your email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
            <span className={styles.input__icon}>
              <EmailIcon />
            </span>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <span className={styles.input__icon}>
              <LockIcon />
            </span>
          </div>
          <div className={styles.login__rest_links}>
            <div className={styles.remember__me}>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className={styles.forgot__password}>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
          <button type="submit">Login</button>
          <div className={styles.signup__link}>
            <span>Don&apos;t have an account?</span>
            <Link to="/register">Sign Up</Link>
          </div>
        </form>
        <p className={styles.login__break_line}>or continue with</p>
        <div className={styles.social__login}>
          <button className={styles.google__login}>
            <GoogleIcon />
            Google
          </button>
          <button className={styles.facebook__login}>
            <FacebookIcon />
            Facebook
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
