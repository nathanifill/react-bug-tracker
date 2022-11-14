import Footer from "../components/Footer";
import Form from "../components/AddNewBugForm/AddNewBugForm";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        {/* <div className={styles.overlay}></div> */}
        <div className={styles.flexcontainer}>
          <Form />
          <img
            className={styles.img}
            alt="Lorem ipsum"
            src="./img/vespa-cropped.png"
          ></img>
          {/* TODO: Update alt tag */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Root;
