import { prisma } from '../utils/connection'
import { allPizzas, allPromotions } from '../utils/seedData';


// run the command on terminal to populate data
// >  prisma db seed

async function main() {

    await prisma.produit.createMany({ data: allPizzas })
    await prisma.promotion.createMany({ data: allPromotions })
}

main()
.catch(async (e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
})
