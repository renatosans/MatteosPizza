import Head from 'next/head'
import { pizzaType, ingredientType } from '../utils/types'
import { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList'
import { IngredientForm } from '../components/IngredientForm'
import toast, { Toaster } from "react-hot-toast"
import IngredientCard from '../components/IngredientCard'


export default function Home() {
  const [pizzas, setPizzas] = useState<pizzaType[]>();
  const [ingredients, setIngredients] = useState<ingredientType[]>();

  const [form1Open, setForm1Open] = useState<boolean>(false);
  const [form2Open, setForm2Open] = useState<boolean>(false);

  useEffect(() => {
    getPizzas();
    getIngredients();
  }, []);

  const getPizzas = () => {
    fetch(`api/pizzas`)
    .then(resp => resp.json())
    .then(resultSet => setPizzas(resultSet))
    .catch(error => console.error(error))
  }

  const getIngredients = () => {
    fetch(`api/ingredients`)
    .then(resp => resp.json())
    .then(resultSet => setIngredients(resultSet))
    .catch(error => console.error(error))
  }

  const addPizza = () => {
    setForm1Open(true);
  }

  const addIngredient = () => {
    setForm2Open(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Matteos Pizza</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster/>
      <Featured/>
      <div className={styles.actions}>
        <button className={styles.button} onClick={addPizza}>My Pizzas</button>
        <button className={styles.button} onClick={addIngredient}>My Ingredients</button>
      </div>
      <Draggable>
        <div style={{height: 0}}>
            <IngredientForm parentRef={{ setForm2Open, getIngredients }} opened={form2Open} />
        </div>
      </Draggable>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20}} >{
          // TODO: fazer a refatoração desse trecho
          ingredients&&ingredients.map((item: ingredientType) => <IngredientCard ingredient={item} />
        )}
      </div>
      <PizzaList items={pizzas} desc={'Pedir pizza é sempre uma boa ideia'} />
    </div>
  )
}
