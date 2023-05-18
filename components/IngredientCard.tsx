import Image from "next/image";
import { Trash } from "@phosphor-icons/react";
import { ingredientType } from "../utils/types";


type props = {
  ingredient: ingredientType;
}

const removeItem = () => {

}

const IngredientCard = ({ingredient}: props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 70}} >
      <Image src={ingredient.img} alt={ingredient.ingredient_name} width={70} height={70} />
      <p style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ingredient.ingredient_name}</p>
      <Trash color="gray" width={32} height={32} onClick={removeItem} />
    </div>
  )
}

export default IngredientCard
