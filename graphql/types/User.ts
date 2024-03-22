import { builder } from "../builder";

builder.prismaNode('User', {
    id: { field: 'id' },
    fields: (t) => ({
        coupons: t.relation('coupons'),
        tuitions: t.relation('tuitions', {
            args: {
                startTime: t.arg.string(),
                endTime: t.arg.string()
            },
            query: (args) => ({
                where: {
                    ...(args.startTime && {
                        startTime: {
                            gte: new Date(args.startTime)
                        }
                    }),
                    ...(args.endTime && {
                        endTime: {
                            lte: new Date(args.endTime)
                        }
                    })
                }
            })
        }),
        twentyMinuteCouponCount: t.relationCount('coupons', {
            where: {
                type: 'TWENTY',
                status: "ACTIVE"
            }
        }),
        fortyMinuteCouponCount: t.relationCount('coupons', {
            where: {
                type: 'FORTY',
                status: "ACTIVE"
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