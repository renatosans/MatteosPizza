import Image from "next/image";
import { HeatLevel } from "./HeatLevel";
import styles from "../styles/PizzaCard.module.css";


const PizzaCard = ({pizza, currency}: any) => {
  return (
    <div className={styles.container}>
      <Image src={pizza.image} alt={pizza.nom} width={250} height={250} />
      <h1 className={styles.title}>{pizza.nom}</h1>
      <span className={styles.price}>{pizza.prix} {currency}</span>
      <HeatLevel level={pizza.heat} ></HeatLevel>
      <p className={styles.desc}>{pizza.description}</p>
    </div>
  );
};

export default PizzaCard;
