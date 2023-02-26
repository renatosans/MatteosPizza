import { useState, useEffect, FormEvent } from 'react'
import { notification } from '../utils/notification'
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

        // ...
    }

    return (
    <>
        <Toaster />
        <form onSubmit={handleSubmit}>
            <input type="text" name="ingredient_name" value={ingredient.ingredient_name}/>
            <input type="supplier" name="supplier" value={ingredient.supplier}/>
        </form>
    </>
    )
}

export default IngredientForm;
