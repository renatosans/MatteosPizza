import Head from 'next/head'
import { pizzaType } from '../utils/types'
import { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import { Button, Dialog } from '@mui/material'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList'
import { IngredientForm } from '../components/IngredientForm'
import toast, { Toaster } from "react-hot-toast"


export default function Home() {
  const [open, setOpen] = useState(false);
  const [pizzas, setPizzas] = useState<pizzaType[]>();

  useEffect(() => {
    fetch('api/pizzas')
    .then(resp => resp.json())
    .then(resultSet => setPizzas(resultSet))
    .catch(error => console.error(error))
  }, []);

  const toggle = () => {
    setOpen(current => !current);
  }

  const addPizza = () => {
    toast.success(`NEW pizza`);
  }

  const addIngredient = () => {
    setOpen(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Matteos Pizza</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster/>
			<Draggable>
        <Dialog open={open} onClose={toggle} BackdropProps={{ style: { backgroundColor: "transparent" } }} >
          <IngredientForm dialogRef={{ toggle }} />
        </Dialog>
			</Draggable>
      <Featured/>
      <div className={styles.actions}>
        <button className={styles.button} onClick={addPizza}>My Pizzas</button>
        <button className={styles.button} onClick={addIngredient}>My Ingredients</button>
      </div>
      <PizzaList items={pizzas} desc={'Pedir pizza é sempre uma boa ideia'} />
    </div>
  )
}
