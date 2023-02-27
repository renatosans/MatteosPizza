import { pizzaType, ingredientType, promotionType } from "./types"


const defaultDescription: string = 'Choose 5 ingredients from our menu';


export const allPizzas: pizzaType[] = [
    {
      nom: 'Neapolitan Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/palermo.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 15,
      description: 'A basic dough, raw tomatoes, fresh mozzarella cheese, fresh basil, and olive oil',
      heat: 3,
    },
    {
      nom: 'California Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/pizza6.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: 'Chicken, peanut sauce, artichoke hearts, and goat cheese',
      heat: 2,
    },
    {
      nom: 'New York-Style Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/pizza7.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: 'Pizza dough, tomato sauce, mozzarella',
      heat: 1,
    },
    {
      nom: 'Volcano',
      reference: 'trending',
      image: '/img/produits/pizza/pizza8.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: 'BBQ sauce, chicken, pineapple, green peppers, onions, jalapenos, and mozzarella',
      heat: 3,
    },
    {
      nom: 'Sicilian Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/pizza1.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 15,
      description: 'Pecorino, pepperoni, and sliced mozzarella cheese',
      heat: 4,
    },
    {
      nom: 'Havaian',
      reference: 'trending',
      image: '/img/produits/pizza/pizza2.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: 'Pineapple, tomato sauce, cheese, ham or bacon',
      heat: 2,
    },
    {
      nom: 'Detroit Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/palermo2.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 25,
      description: 'Chewy crust, pizza sauce, melty cheese galore and pepperoni cups',
      heat: 3,
    },
    {
      nom: 'Chicago Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/pizza3.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 15,
      description: 'Pizza dough, tomato sauce, cheese, sausage, pepperoni, onions and mushrooms',
      heat: 5,
    },
    {
      nom: 'Greek Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/pizza4.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: 'Pizza dough, cheese, tomato sauce, feta, spinach and olives',
      heat: 4,
    },
    {
      nom: 'Types of Pizza Crust',
      reference: 'trending',
      image: '/img/produits/pizza/pizza5.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: defaultDescription,
      heat: 1,
    },
]

export const allIngredients: ingredientType[] = [
  {
    "ingredient_id" : 1,
    "ingredient_name" : "Calabresa",
    "flag" : true,
    "img" : "/img/ingredients/ingredient1.jpg",
    "supplier": "Assaí Atacadista",
  },
  {
    "ingredient_id" : 2,
    "ingredient_name" : "Ovo",
    "flag" : true,
    "img" : "/img/ingredients/ingredient2.jpg",
    "supplier": "Extra",
  },
  {
    "ingredient_id" : 3,
    "ingredient_name" : "Tomate",
    "flag" : true,
    "img" : "/img/ingredients/ingredient3.jpg",
    "supplier": "Mercadão Atacadista",
  },
  {
    "ingredient_id" : 4,
    "ingredient_name" : "Mussarela",
    "flag" : true,
    "img" : "/img/ingredients/ingredient4.jpg",
    "supplier": "Extra",
  },
  {
    "ingredient_id" : 5,
    "ingredient_name" : "Azeitona",
    "flag" : true,
    "img" : "/img/ingredients/ingredient5.jpg",
    "supplier": "Mercadão Atacadista",
  },
  {
    "ingredient_id" : 6,
    "ingredient_name" : "Peperoni",
    "flag" : true,
    "img" : "/img/ingredients/ingredient6.jpg",
    "supplier": "Assaí Atacadista",
  },
  {
    "ingredient_id" : 7,
    "ingredient_name" : "Queijo Gorgonzola",
    "flag" : false,
    "img" : "/img/ingredients/ingredient7.jpg",
    "supplier" : "Carrefour",
  }
]

export const allPromotions: promotionType[] = [
	{
		"id_prom": "1",
		"Description": "Promoção de Natal",
		"date_debut": new Date("2023-12-12"),
		"date_fin": new Date("2024-01-12"),
		"pourcentage_prom": 30
	},
	{
		"id_prom": "2",
		"Description": "Promoção Leve 3 pizzas pague 2",
		"date_debut": new Date("2023-02-05"),
		"date_fin": new Date("2023-03-05"),
		"pourcentage_prom": 25
	},
	{
		"id_prom": "3",
		"Description": "Ganhe 1 refrigerante 2 L",
		"date_debut": new Date("2023-06-10"),
		"date_fin": new Date("2023-10-10"),
		"pourcentage_prom": 17
	},
]
