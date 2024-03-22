import { builder } from "../builder";
import { Tutor } from "./Tutor";
import { User } from "./User";

const Tuition = builder.prismaNode('Tuition', {
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

builder.relayMutationField("createTuition", {
    inputFields: (t) => ({
        couponId: t.string({ required: true }),
        startTime: t.string({ required: true }),
        endTime: t.string({ required: true }),
        tutorId: t.string({ required: true }),
        userId: t.string({ required: true }),
        type: t.field({ type: TuitionType, required: true })
    })
}, {
    resolve: async (root, args, ctx) => {
        const tuition = await prisma.tuition.create({
            data: {
                type: args.input.type,
                tuteeId: args.input.userId,
                tutorId: args.input.tutorId,
                startTime: args.input.startTime,
                endTime: args.input.endTime,
            }
        })

        const user = await prisma.user.update({
            where: { id: tuition.tuteeId },
            data: {
                tuitions: {
                    connect: {
                        ...tuition
                    }
                }
            }
        })

        const tutor = await prisma.tutor.update({
            where: { id: tuition.tutorId },
            data: {
                tuitions: {
                    connect: {
                        ...tuition
                    }
                }
            }
        })

        return {
            tuition: tuition,
            user: user,
            tutor: tutor
        }
    }
}, {
    outputFields: (t) => ({
        tuition: t.field({
            type: Tuition,
            resolve: (result) => {
                return result.tuition
            }
        }),
        user: t.field({
            type: User,
            resolve: (result) => {
                return result.user
            }
        }),
        tutor: t.field({
            type: Tutor,
            resolve: (result) => {
                return result.tutor
            }
        })
    })
}
)