import { builder } from "../builder";

builder.prismaNode('User', {
    id: { field: 'id' },
    fields: (t) => ({
        coupons: t.relation('coupons'),
        tuitions: t.relation('tuitions'),
        twentyMinuteCouponCount: t.relationCount('coupons', {
            where: {
                type: 'TWENTY'
            }
        }),
        fortyMinuteCouponCount: t.relationCount('coupons', {
            where: {
                type: 'FORTY'
            }
        })
    })
})

builder.queryField("users", (t) =>
    t.prismaField({
        type: ['User'],
        resolve: (query, _parent, _args, _ctx, _info) =>
            prisma.user.findMany({ ...query })
    })
)