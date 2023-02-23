import PizzaCard from "./PizzaCard"
import { ResultSet } from "../models/types"
import styles from '../styles/PizzaList.module.css'


// Projeto original:   https://github.com/BinaryLeo/next_js_pizza_ordering
// Alterações:         adicionado fetch de API e listagem de items da API
const PizzaList: React.FC<{items:ResultSet}> = ({items}) => {
  return (
    <div className={styles.container}>
      <h1 className={'styles.title'}>The Best Pizza In Town</h1>
      <p className={'styles.desc'}>
        lorem ipsum lorem ips lorem ipsum lorem ipsum lorem ipsum lore
      </p>
      <div className={styles.wrapper}>{
        (items)
        ? items.data.characters.results.map((pizza) => <PizzaCard pizza={pizza} />)  // Rick and Morty GraphQL API
        // ? items.map((pizza) => <PizzaCard pizza={pizza} />)              // Kenzie Burger API
        // ? items.results.map((pizza) => <PizzaCard pizza={pizza} />)   // Rick and Morty REST API
        : <p>No item to display</p>
      }
    </div>
    </div>
  );
};

export default PizzaList
