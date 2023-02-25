import fs from 'fs'
import path from 'path'
import { prisma } from '../../../utils/connection'
import { ingredientType } from '../../../utils/types'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "POST": {
			return saveIngredient(req, res);
		}
		case "GET": {
			return getIngredients(req, res);
		}
	}
}

// TODO : Fix image upload
const saveIngredient = async (req: NextApiRequest, res: NextApiResponse) => {
	const { ingredient_id, ingredient_name, flag, supplier, imageData } = req.body;

	const dir = '/img/produit/ingredients/';
	const filename = "ingredient999.jpg";
	// path.resolve('./public', dir, filename)
	const buffer = Buffer.from(imageData, 'base64');
	fs.open(filename, "w", (err, fd) => {
		fs.write(fd, buffer, 0, buffer.length, (err, writtenBytes, buffer) => {
			console.log(`Wrote ${writtenBytes} bytes to file`);
		});
	}); 

	const img: string = dir + filename;
	const newIngredient: ingredientType = { ingredient_id, ingredient_name, flag, img, supplier };

    prisma.ingredients.create({ data: newIngredient })
    .then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

const getIngredients = async (req: NextApiRequest, res: NextApiResponse) => {
    prisma.ingredients.findMany()
    .then((ingredients) => res.send(ingredients))
    .catch((error) => res.send("Error: " + error.message))
}
