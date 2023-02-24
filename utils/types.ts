
export type pizzaType = {
    nom: string,
    reference: string,
    categorie: string,
    quantite: number,
    prix: number,
    image: string,
    description: string,
    heat: number,
}

export type promotionType = {
    id_prom: string,
    Description: string,
    date_debut: Date,
    date_fin: Date,
    pourcentage_prom: number,
}
