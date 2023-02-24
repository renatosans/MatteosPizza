import Head from 'next/head'
import { pizzaType } from '../utils/types'
import { useState, useEffect } from 'react'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList'


export default function Home() {
  const [pizzas, setPizzas] = useState<pizzaType[]>();

  useEffect(() => {
    fetch('api/pizzas')
    .then(resp => resp.json())
    .then(resultSet => setPizzas(resultSet))
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
     <PizzaList items={pizzas} desc={'Pedir pizza é sempre uma boa ideia'} />
    </div>
  )
}
