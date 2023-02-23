import Head from 'next/head'
import { useState, useEffect } from 'react'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList'


export default function Home() {
  const [items, setItems] = useState();

  // API samples: 
  // https://hamburgueria-kenzie-json-serve.herokuapp.com/products
  // https://rickandmortyapi.com/api/character/?page=19
  // https://rickandmortyapi.com/graphql

  useEffect(() => {
    fetch('api/pizzas')
    .then(resp => resp.json())
    .then(pizzas => setItems(pizzas))
    .catch(error => console.error(error))
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Matteos Pizza</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Featured/>
     <PizzaList items={items} />
    </div>
  )
}
