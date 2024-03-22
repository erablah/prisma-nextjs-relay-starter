/**
 * @generated SignedSource<<47e8edea8d8b7c0520d12726e209fed8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WeeklyEventCalendarFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"TuitionCalendarCellFragment">;
  readonly " $fragmentType": "WeeklyEventCalendarFragment";
};
export type WeeklyEventCalendarFragment$key = {
  readonly " $data"?: WeeklyEventCalendarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"WeeklyEventCalendarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WeeklyEventCalendarFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TuitionCalendarCellFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "5b9a8ef05956cc11d001b33626a6843f";

export default node;
