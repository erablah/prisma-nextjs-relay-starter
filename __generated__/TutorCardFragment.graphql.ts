/**
 * @generated SignedSource<<15220421d9bba73724dbf1a70e1a38be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TutorCardFragment$data = {
  readonly education: string;
  readonly name: string;
  readonly " $fragmentType": "TutorCardFragment";
};
export type TutorCardFragment$key = {
  readonly " $data"?: TutorCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TutorCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TutorCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "education",
      "storageKey": null
    }
  ],
  "type": "Tutor",
  "abstractKey": null
};

(node as any).hash = "277bb41508be052eb05a5adf67d1bfc5";

export default node;
