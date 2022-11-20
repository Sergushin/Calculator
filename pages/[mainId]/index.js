import { useRouter } from "next/router";
import Header from "../../app/components/Header/Header";
import Categories from "../../app/elements/Categories/Categories";
import Inputs  from "../../app/elements/Inputs/Inputs";
import styles from "./Main.module.scss";

const Main = () => {
  const router = useRouter();
  const query = router.query.mainId;

  return (
    <div className={styles.main}>
      <Header title="Loan type">Caclculate your Mortgage</Header>
      <Categories />
      <Inputs />
    </div>
  );
};

export default Main;
