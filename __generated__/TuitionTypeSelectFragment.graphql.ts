/**
 * @generated SignedSource<<c0c9af5746020a056f6a4fd71cf5948e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TuitionTypeSelectFragment$data = {
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

(node as any).hash = "acf3ff6a62be94ce8a109d48785d1631";

export default node;
