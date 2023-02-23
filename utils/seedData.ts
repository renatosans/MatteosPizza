import { promotionType } from "./types"


export const allPizzas = [
    {
		"nom": "pizza 4 fromaggi",
		"reference": "#33jj",
		"categorie": "pizza",
		"quantite": 0,
		"prix": 5.5,
		"image": "img/produits/pizza/pizza4fromaggi.jpg",
		"description": "pizza au fromage"
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
	}
]
