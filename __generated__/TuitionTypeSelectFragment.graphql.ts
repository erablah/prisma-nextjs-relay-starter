/**
 * @generated SignedSource<<8c223d43f4845fdf5402544dd2052af1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type TuitionStatus = "ACTIVE" | "USED" | "%future added value";
export type TuitionType = "FORTY" | "TWENTY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type TuitionTypeSelectFragment$data = {
  readonly coupons: ReadonlyArray<{
    readonly id: string;
    readonly status: TuitionStatus;
    readonly type: TuitionType;
  }>;
  readonly fortyMinuteCouponCount: number;
  readonly twentyMinuteCouponCount: number;
  readonly " $fragmentType": "TuitionTypeSelectFragment";
};
export type TuitionTypeSelectFragment$key = {
  readonly " $data"?: TuitionTypeSelectFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TuitionTypeSelectFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TuitionTypeSelectFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TuitionCoupon",
      "kind": "LinkedField",
      "name": "coupons",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "status",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "twentyMinuteCouponCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fortyMinuteCouponCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "d56af72047b883970421712b706ca32c";

export default node;
