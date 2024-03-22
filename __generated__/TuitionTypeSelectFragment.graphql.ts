/**
 * @generated SignedSource<<59404d96375aea19861baf00781f36d5>>
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
  readonly id: string;
  readonly twentyMinuteCouponCount: number;
  readonly " $fragmentType": "TuitionTypeSelectFragment";
};
export type TuitionTypeSelectFragment$key = {
  readonly " $data"?: TuitionTypeSelectFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TuitionTypeSelectFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
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
        (v0/*: any*/),
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
    (v0/*: any*/),
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
})();

(node as any).hash = "f57eada06c2b46d1d640400d3c433bff";

export default node;
