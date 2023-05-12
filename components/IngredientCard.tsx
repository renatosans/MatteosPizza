import Image from "next/image";
import { ingredientType } from "../utils/types";


type props = {
  ingredient: ingredientType;
}

const IngredientCard = ({ingredient}: props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Image src={ingredient.img} alt={ingredient.ingredient_name} width={70} height={70} />
      <p>{ingredient.ingredient_name}</p>
    </div>
  )
}

export default IngredientCard
