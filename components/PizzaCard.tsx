import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";


const PizzaCard = ({pizza}: any) => {
  return (
    <div className={styles.container}>
      <Image src={pizza.image} alt={pizza.name} width={250} height={250} />
      <h1 className={styles.title}>{pizza.name}</h1>
      <span className={styles.price}>{pizza.id}</span>
      <p className={styles.desc}>{pizza.location.name}</p>
    </div>
  );
};

export default PizzaCard;
