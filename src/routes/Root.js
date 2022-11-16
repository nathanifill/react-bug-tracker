import Footer from "../components/Footer";
import LogInForm from "../components/LogInForm/LogInForm";
import styles from "./Root.module.css";
import { useEffect } from "react";
import "../globals.css";

const Root = () => {
  useEffect(() => {
    document.title = "Home | Bug Tracker";
  }, []);

  return (
    <div className="app">
      <main className={styles.main}>
        <div className={styles.flexcontainer}>
          <LogInForm />
          <img
            className={styles.img}
            alt="Bug Tracker"
            src="./img/evil-ladybird.png"
          ></img>
          {/* angry bug i don't like on second time around, bug shield (logo), butterflies are great. maybe i could use some sort of animation to change their colours too (home page), i like cute-ladybird but its legs blend in so it's a no., evil ladybird is funny and could be good on the home page (home page), 3d-ladybird could be a logo  */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Root;
