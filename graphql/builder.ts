import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import prisma from "../lib/prisma";
import { DateTimeResolver } from "graphql-scalars";

export const builder = new SchemaBuilder<{
    PrismaTypes: PrismaTypes,
    Scalars: {
        Date: {
            Input: Date;
            Output: Date;
        }
    }
}>({
    plugins: [PrismaPlugin, RelayPlugin],
    relayOptions: {
        clientMutationId: 'omit',
        cursorType: 'String'
    },
    prisma: {
        client: prisma,
    }
})

// 5. 
builder.queryType({
    fields: (t) => ({
        ok: t.boolean({
            resolve: () => true,
        }),
    }),
});

builder.mutationType({})

builder.addScalarType("Date", DateTimeResolver, {})