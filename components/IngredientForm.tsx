import styles from '../styles/Ingredient.module.css'
import { notification } from '../utils/notification'
import toast, { Toaster, ToastOptions } from 'react-hot-toast'
import React, { useState, Dispatch, SetStateAction, FormEvent } from 'react'
import { ingredientType } from '../utils/types'


type props = {
    opened: boolean,
    parentRef: {
        setForm2Open: Dispatch<SetStateAction<boolean>>;
        getIngredients: () => void
    }
}

const emptyIngredient = {
    ingredient_name: "",
    flag: false,
    img: "",
    supplier: "",
}

const emptyImage = {
    imageFormat: "",
    imageData: "",
}

export const IngredientForm = ({opened, parentRef}: props) => {

	const [ingredient, setIngredient] = useState<ingredientType>(emptyIngredient);

    const [image, setImage] = useState(emptyImage);

    const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (ingredient.ingredient_name === "" || ingredient.supplier === "") {
			toast.error('Favor preencher todos os campos!', notification.options as ToastOptions);
			return;
		}

        const payload = {...ingredient, ...image};

        fetch(`/api/ingredients`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(payload), })
        .then((response) => {
            if(response.ok)
            {
                toast.success('Ingrediente salvo com sucesso', notification.options as ToastOptions);
                setIngredient(emptyIngredient);
                setImage(emptyImage);
                parentRef.getIngredients();  // faz o refresh do inventário
                parentRef.setForm2Open(false);   // Fecha o formulario
                return;
            }

            throw new Error(response.statusText);
        })  
        .then((text) => {
            console.log(text);
        })  
        .catch((error: any) => {
            toast.error(error.message, notification.options as ToastOptions);
        })
    }

	const onChange = (e: any) => {
		if (e.target.type === 'file') {
			const file = e.target.files[0];
			// Reads the file using the FileReader API
			const reader = new FileReader();
			reader.onloadend = () => {
                const result = reader.result as string;
				const fileData = result.split(';base64,');
				let formato = fileData[0].replace('data:', '') + ';base64';
                setImage({imageFormat: formato, imageData: fileData[1]});
			}
			reader.readAsDataURL(file);
		}

        setIngredient({...ingredient, [e.target.name]: e.target.value, });
	};

    const getVisibility = (open: boolean) => {
        const visibility = open ? `visible` : `hidden`;
        return visibility;
    }

    return (
    <div className={styles.container} style={ {visibility: getVisibility(opened)} }>
        <Toaster />
        <form onSubmit={handleSubmit} className={styles.form} >
            <label htmlFor="ingredient_name" className={styles.label} >Ingrediente</label>
            <input type="text" className={styles.input} name="ingredient_name" value={ingredient.ingredient_name} onChange={onChange} />
            <label htmlFor="supplier" className={styles.label} >Fornecedor</label>
            <input type="text" className={styles.input} name="supplier" value={ingredient.supplier} onChange={onChange} />

            <label htmlFor="foto" className={styles.label} >Foto</label>
            <div className={styles.fileDialog}>
                <input type="file" name="foto" accept=".gif,.jpg,.jpeg,.png" onChange={onChange} />
                <img style={{'width':'100%'}} src={"data:" + image.imageFormat + ", " + image.imageData} alt={ingredient.ingredient_name}></img>
            </div>

            <button type="submit" className={styles.button}>Salvar</button>
        </form>
    </div>
    )
}

export default IngredientForm;
