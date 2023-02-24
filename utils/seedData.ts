import { pizzaType, promotionType } from "./types"


const defaultDescription: string = 'Choose 5 ingredients from our menu';


export const allPizzas: pizzaType[] = [
    {
      nom: 'Neapolitan Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/palermo.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 15,
      description: defaultDescription,
      heat: 3,
    },
    {
      nom: 'California Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/pizza6.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: defaultDescription,
      heat: 2,
    },
    {
      nom: 'New York-Style Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/pizza7.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: defaultDescription,
      heat: 1,
    },
    {
      nom: 'Volcano',
      reference: 'trending',
      image: '/img/produits/pizza/pizza8.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: defaultDescription,
      heat: 3,
    },
    {
      nom: 'Sicilian Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/pizza1.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 15,
      description: defaultDescription,
      heat: 4,
    },
    {
      nom: 'Havaian',
      reference: 'trending',
      image: '/img/produits/pizza/pizza2.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: defaultDescription,
      heat: 2,
    },
    {
      nom: 'Detroit Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/palermo2.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 25,
      description: defaultDescription,
      heat: 3,
    },
    {
      nom: 'Chicago Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/pizza3.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 15,
      description: defaultDescription,
      heat: 5,
    },
    {
      nom: 'Greek Pizza',
      reference: 'trending',
      image: '/img/produits/pizza/pizza4.jpg',
      categorie: 'pizza',
      quantite: 0,
      prix: 9,
      description: defaultDescription,
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
