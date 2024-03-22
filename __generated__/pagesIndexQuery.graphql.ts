/**
 * @generated SignedSource<<8ac34556bc74b5ccb62032fb7b38340f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pagesIndexQuery$variables = Record<PropertyKey, never>;
export type pagesIndexQuery$data = {
  readonly users: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"TuitionTypeSelectFragment" | "WeeklyEventCalendarFragment">;
  }>;
};
export type pagesIndexQuery = {
  response: pagesIndexQuery$data;
  variables: pagesIndexQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TuitionTypeSelectFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "WeeklyEventCalendarFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
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
              (v1/*: any*/),
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
          },
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
              (v1/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9962efcbf21bff3e4978530efe68030b",
    "id": null,
    "metadata": {},
    "name": "pagesIndexQuery",
    "operationKind": "query",
    "text": "query pagesIndexQuery {\n  users {\n    ...TuitionTypeSelectFragment\n    ...WeeklyEventCalendarFragment\n    id\n  }\n}\n\nfragment TuitionCalendarCellFragment on User {\n  ...TuitionEventFragment\n}\n\nfragment TuitionEventFragment on User {\n  tuitions {\n    startTime\n    endTime\n    type\n    id\n  }\n}\n\nfragment TuitionTypeSelectFragment on User {\n  coupons {\n    id\n    type\n    status\n  }\n  id\n  twentyMinuteCouponCount\n  fortyMinuteCouponCount\n}\n\nfragment WeeklyEventCalendarFragment on User {\n  ...TuitionCalendarCellFragment\n}\n"
  }
};
})();

(node as any).hash = "eae330eb1d9a62f321f26bac368dbd34";

export default node;
