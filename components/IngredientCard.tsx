import Image from "next/image";
import { Trash } from "@phosphor-icons/react";
import { ingredientType } from "../utils/types";
import { notification } from '../utils/notification'
import toast, { Toaster, ToastOptions } from 'react-hot-toast'


type props = {
  ingredient: ingredientType;
}

const IngredientCard = ({ingredient}: props) => {
  const removeItem = () => {
    toast.success(`Ingredient Id: ${ingredient.ingredient_id}`, notification.options as ToastOptions);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 70}} >
      <Toaster />
      <Image src={ingredient.img} alt={ingredient.ingredient_name} width={70} height={70} />
      <p style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ingredient.ingredient_name}</p>
      <Trash color="gray" width={32} height={32} onClick={removeItem} />
    </div>
  )
}

export default IngredientCard
