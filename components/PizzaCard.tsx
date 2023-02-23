import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";


const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Image src={pizza.image} width="500" height="500" />
      <h1 className={styles.title}>{pizza.name}</h1>
      <span className={styles.price}>{pizza.id}</span>
      <p className={styles.desc}>{pizza.location.name}</p>
    </div>
  );
};

export default PizzaCard;
