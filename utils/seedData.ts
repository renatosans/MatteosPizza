import { pizzaType, promotionType } from "./types"


const defaultDescription: string = 'Choose 5 ingredients from our menu';


export const allPizzas: pizzaType[] = [
    {
      nom: 'Neapolitan Pizza',
      image: '/img/produits/pizza/palermo.jpg',
      categorie: 'pizza',
      quantity: 0,
      prix: 15,
      description: defaultDescription
    },
    {
      nom: 'California Pizza',
      image: '/img/produits/pizza/pizza6.jpg',
      categorie: 'pizza',
      quantity: 0,
      prix: 9,
      description: defaultDescription
    },
    {
      nom: 'New York-Style Pizza',
      image: '/img/produits/pizza/pizza7.jpg',
      categorie: 'pizza',
      quantity: 0,
      prix: 9,
      description: defaultDescription
    },
    {
      nom: 'Volcano',
      image: '/img/produits/pizza/pizza8.jpg',
      categorie: 'pizza',
      quantity: 0,
      prix: 9,
      description: defaultDescription
    },
    {
      nom: 'Sicilian Pizza',
      image: '/img/produits/pizza/pizza1.jpg',
      categorie: 'pizza',
      quantity: 0,
      prix: 15,
      description: defaultDescription
    },
    {
      nom: 'Havaian',
      image: '/img/produits/pizza/pizza2.jpg',
      categorie: 'pizza',
      quantity: 0,
      prix: 9,
      description: defaultDescription
    },
    {
      nom: 'Detroit Pizza',
      image: '/img/produits/pizza/palermo2.jpg',
      categorie: 'pizza',
      quantity: 0,
      prix: 25,
      description: defaultDescription
    },
    {
      nom: 'Chicago Pizza',
      image: '/img/produits/pizza/pizza3.jpg',
      categorie: 'pizza',
      quantity: 0,
      prix: 15,
      description: defaultDescription
    },
    {
      nom: 'Greek Pizza',
      image: '/img/produits/pizza/pizza4.jpg',
      categorie: 'pizza',
      quantity: 0,
      prix: 9,
      description: defaultDescription
    },
    {
      nom: 'Types of Pizza Crust',
      image: '/img/produits/pizza/pizza5.jpg',
      categorie: 'pizza',
      quantity: 0,
      prix: 9,
      description: defaultDescription
    },
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
