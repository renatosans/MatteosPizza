import PizzaCard from "./PizzaCard"
import styles from '../styles/PizzaList.module.css'


// Projeto original:   https://github.com/BinaryLeo/next_js_pizza_ordering
// Alterações:         adicionado fetch de API e listagem de items da API
const PizzaList = ({items}) => {
  return (
    <div className={styles.container}>
      <h1 className={'styles.title'}>The Best Pizza In Town</h1>
      <p className={'styles.desc'}>
        lorem ipsum lorem ips lorem ipsum lorem ipsum lorem ipsum lore
      </p>
      <div className={styles.wrapper}>{
        (items)
        ? items.map((pizza) => <PizzaCard pizza={pizza} />)
        : <p>No item to display</p>
      }
    </div>
    </div>
  );
};

export default PizzaList
