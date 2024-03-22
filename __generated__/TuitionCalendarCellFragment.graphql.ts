/**
 * @generated SignedSource<<5ff7dcd292061c513131b6f6c02e9d69>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TuitionCalendarCellFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"TuitionEventFragment">;
  readonly " $fragmentType": "TuitionCalendarCellFragment";
};
export type TuitionCalendarCellFragment$key = {
  readonly " $data"?: TuitionCalendarCellFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TuitionCalendarCellFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TuitionCalendarCellFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TuitionEventFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "0a2ff0a6c9604aaa55c70aa1cf070666";

export default node;
