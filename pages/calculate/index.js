import { useRouter } from "next/router";
import Header from "../../app/components/Header/Header";
import Total from "../../app/elements/Total/Total";
import styles from "./Calculate.module.scss";
const Calculate = () => {
  const router=useRouter()
  const {query:total}=router
  const {props}=total
  return (
    <div className={styles.calculate}>
      <Header title="Budget">Hello, Rick</Header>
      <Total>{total.total}</Total>
    </div>
  );
};

export default Calculate;
