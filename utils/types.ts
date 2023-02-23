
export type pizzaType = {
    nom: string,
    categorie: string,
    quantity: number,
    prix: number,
    image: string,
    description: string,
}

export type promotionType = {
    id_prom: string,
    Description: string,
    date_debut: Date,
    date_fin: Date,
    pourcentage_prom: number,
}
