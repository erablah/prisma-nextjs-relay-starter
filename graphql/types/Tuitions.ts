import { builder } from "../builder";

builder.prismaNode('Tuition', {
    id: { field: 'id' },
    fields: (t) => ({
        type: t.expose('type', { type: TuitionType }),
        startTime: t.expose('startTime', {
            type: 'Date'
        }),
        endTime: t.expose('endTime', {
            type: 'Date'
        }),
        tutee: t.relation('tutee'),
        tutor: t.relation('tutor')
    })
})

builder.prismaNode('TuitionCoupon', {
    id: { field: 'id' },
    fields: (t) => ({
        type: t.expose('type', { type: TuitionType }),
        status: t.expose('status', { type: TuitionStatus }),
        user: t.relation('user')
    })
})

// builder.queryField("tutors", (t) =>
//     t.prismaField({
//         type: ['Tutor'],
//         resolve: (query, _parent, _args, _ctx, _info) =>
//             prisma.tutor.findMany({ ...query })
//     })
// )

const TuitionType = builder.enumType('TuitionType', {
    values: ['TWENTY', 'FORTY'] as const
})

const TuitionStatus = builder.enumType('TuitionStatus', {
    values: ['ACTIVE', 'USED'] as const
})