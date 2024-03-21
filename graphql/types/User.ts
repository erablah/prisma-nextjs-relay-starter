import { builder } from "../builder";

builder.prismaNode('User', {
    id: { field: 'id' },
    fields: (t) => ({
        coupons: t.relation('coupons'),
        tuitions: t.relation('tuitions')
    })
})

builder.queryField("users", (t) =>
    t.prismaField({
        type: ['User'],
        resolve: (query, _parent, _args, _ctx, _info) =>
            prisma.user.findMany({ ...query })
    })
)