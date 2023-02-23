import useSWR from 'swr'
import axios from 'axios'
import Head from 'next/head'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList'


export default function Home() {

  // API samples: 
  // https://hamburgueria-kenzie-json-serve.herokuapp.com/products
  // https://rickandmortyapi.com/api/character/?page=19
  // https://rickandmortyapi.com/graphql

  // graphQL sample query
  const query = `
    query {
      characters(page: 2, filter: { name: "rick" }) {
        results {
          id
          name
          location { name }
          image
        }
      }
    }  
  `

  /*
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then(resp => resp.json())
    .then(pizzas => setItems(pizzas))
    .catch(error => console.error(error))
  }, []);
  */

  const url = 'https://rickandmortyapi.com/graphql';
  const fetcher2 = (query: string) => { return axios.post(url, { query }).then((res) => res.data) }
  const { data: pizzaItems, error, isValidating, mutate } = useSWR(query, fetcher2)

  return (
    <div className={styles.container}>
      <Head>
        <title>Matteos Pizza</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Featured/>
     <PizzaList items={pizzaItems} />
    </div>
  )
}
