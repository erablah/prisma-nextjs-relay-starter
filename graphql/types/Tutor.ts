import { builder } from "../builder";

builder.prismaNode('Tutor', {
    id: { field: 'id' },
    fields: (t) => ({
        name: t.exposeString('name'),
        education: t.exposeString('education'),
        image: t.exposeString('image', { nullable: true }),
        tuitions: t.relation('tuitions')
    })
})

builder.queryField("tutors", (t) =>
    t.prismaField({
        type: ['Tutor'],
        resolve: (query, _parent, _args, _ctx, _info) =>
            prisma.tutor.findMany({ ...query })
    })
)