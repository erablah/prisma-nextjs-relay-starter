import { TuitionStatus, TuitionType } from "@prisma/client";

export const users = [
    {
        id: "18cf8c30-f073-451b-83f9-f93f3382921e",
        coupons: [
            {
                id: "ac44a2d9-852d-4b2a-bae0-833810fe5fdf",
                type: TuitionType.FORTY,
                status: TuitionStatus.ACTIVE,
            },
            {
                id: "634069e8-3a90-48a7-854b-d59177765d0e",
                type: TuitionType.TWENTY,
                status: TuitionStatus.ACTIVE,
            }
        ]
    }
]