import { PrismaClient } from '@prisma/client';
import { tutors } from '../data/tutors';
import { users } from '../data/users';
const prisma = new PrismaClient()

async function main() {
    for (const user of users) {
        const { coupons: coupons, ...rest } = user
        const createdUser = await prisma.user.create({
            data: rest,
        });

        for (const coupon of coupons) {
            await prisma.tuitionCoupon.create({
                data: {
                    ...coupon,
                    user: { connect: { id: createdUser.id } }
                }
            })
        }
    }
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })