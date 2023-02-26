import styles from "../styles/Ingredient.module.css"
import { notification } from '../utils/notification'
import { useState, useEffect, FormEvent } from 'react'
import toast, { Toaster, ToastOptions } from "react-hot-toast";


export const IngredientForm = ({dialogRef}: any) => {

	const [ingredient, setIngredient] = useState({
        ingredient_name: "",
		flag: false,
		supplier: "",
	})

    const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (ingredient.ingredient_name === "" || ingredient.supplier === "") {
			toast.error('Favor preencher todos os campos!', notification.options as ToastOptions);
			return;
		}

        try {
            await fetch(`/api/ingredients`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(ingredient),
            })
        } catch (error) {
            // ...
        }

        // ...
    }

    return (
    <>
        <Toaster />
        <form onSubmit={handleSubmit} className={styles.form} >
            <input type="text" name="ingredient_name" value={ingredient.ingredient_name}/>
            <input type="supplier" name="supplier" value={ingredient.supplier}/>

            <div className={styles.fileDialog}>
                <input type="file" name="foto" accept=".gif,.jpg,.jpeg,.png" />
                <img src="logo.png"></img>
            </div>

            <button type="submit" className={styles.button}>Salvar</button>
        </form>
    </>
    )
}

export default IngredientForm;
