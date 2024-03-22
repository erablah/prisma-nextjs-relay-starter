/**
 * @generated SignedSource<<50e9d447401bd993baeae039a6859f5f>>
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
  readonly id: string;
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
      "name": "id",
      "storageKey": null
    },
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

(node as any).hash = "4825febbcc708b78ddcbd580fb86fdfc";

export default node;
