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
        args: {
            startTime: t.arg.string(),
            endTime: t.arg.string()
        },
        resolve: (query, _parent, _args, _ctx, _info) =>
            prisma.tutor.findMany({
                ...query, where: {
                    ...(_args.startTime && _args.endTime && {
                        NOT: {
                            tuitions: {
                                some: {
                                    AND: [
                                        { startTime: { lte: _args.endTime } },
                                        { endTime: { gte: _args.startTime } }
                                    ]
                                }
                            }
                        }
                    })
                }, take: 5
            })
    })
)