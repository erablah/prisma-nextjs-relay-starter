/**
 * @generated SignedSource<<162b7501754c416b68b3a444be7cd15c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type TuitionType = "FORTY" | "TWENTY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type TuitionEventFragment$data = {
  readonly tuitions: ReadonlyArray<{
    readonly endTime: any;
    readonly startTime: any;
    readonly type: TuitionType;
  }>;
  readonly " $fragmentType": "TuitionEventFragment";
};
export type TuitionEventFragment$key = {
  readonly " $data"?: TuitionEventFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TuitionEventFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TuitionEventFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Tuition",
      "kind": "LinkedField",
      "name": "tuitions",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startTime",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endTime",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "6f6c2d860c1db0d409b64ffe92fdb2c6";

export default node;
