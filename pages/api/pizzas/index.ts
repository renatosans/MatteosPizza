import { prisma } from '../../../utils/connection'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "POST": {
			return savePizza(req, res);
		}
		case "GET": {
			return getPizzas(req, res);
		}
	}
}

const savePizza = async (req: NextApiRequest, res: NextApiResponse) => {
    prisma.produit.create({ data: req.body })
    .then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

const getPizzas = async (req: NextApiRequest, res: NextApiResponse) => {
    prisma.produit.findMany({ where: { categorie: 'sandwich' } })
    .then((pizzas) => res.send(pizzas))
    .catch((error) => res.send("Error: " + error.message))
}
