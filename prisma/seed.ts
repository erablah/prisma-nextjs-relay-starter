import { PrismaClient } from '@prisma/client'
import { tutors } from '../data/tutors'
const prisma = new PrismaClient()

async function main() {
    await prisma.tutor.createMany({
        data: tutors,
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })