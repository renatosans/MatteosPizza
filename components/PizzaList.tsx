import PizzaCard from "./PizzaCard"
import { pizzaType } from "../utils/types";
import styles from '../styles/PizzaList.module.css'


type props = {
  items: pizzaType[] | undefined;
  desc: string;
}

const PizzaList = ({items, desc}: props) => {
  return (
    <div className={styles.container}>
      <h1 className={'styles.title'}>The Best Pizza In Town</h1>
      <p className={'styles.desc'}>{desc}</p>
      <div className={styles.wrapper}>{
        (items)
        ? items.map((pizza: pizzaType) => <PizzaCard pizza={pizza} currency={"U$"} adv={""} />)
        : <p>No item to display</p>
      }
    </div>
    </div>
  );
};

export default PizzaList
