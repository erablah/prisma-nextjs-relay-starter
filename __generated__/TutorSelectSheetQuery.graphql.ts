/**
 * @generated SignedSource<<b04099ed90c077d0c89dc57d8880782f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TutorSelectSheetQuery$variables = {
  endTime?: string | null | undefined;
  startTime?: string | null | undefined;
};
export type TutorSelectSheetQuery$data = {
  readonly tutors: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"TutorCardFragment">;
  }>;
};
export type TutorSelectSheetQuery = {
  response: TutorSelectSheetQuery$data;
  variables: TutorSelectSheetQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "endTime"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "startTime"
},
v2 = [
  {
    "kind": "Variable",
    "name": "endTime",
    "variableName": "endTime"
  },
  {
    "kind": "Variable",
    "name": "startTime",
    "variableName": "startTime"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TutorSelectSheetQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Tutor",
        "kind": "LinkedField",
        "name": "tutors",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TutorCardFragment"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TutorSelectSheetQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Tutor",
        "kind": "LinkedField",
        "name": "tutors",
        "plural": true,
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7dd7f69854eceea4374ad8f5906bfc57",
    "id": null,
    "metadata": {},
    "name": "TutorSelectSheetQuery",
    "operationKind": "query",
    "text": "query TutorSelectSheetQuery(\n  $startTime: String\n  $endTime: String\n) {\n  tutors(startTime: $startTime, endTime: $endTime) {\n    ...TutorCardFragment\n    id\n  }\n}\n\nfragment TutorCardFragment on Tutor {\n  name\n  education\n}\n"
  }
};
})();

(node as any).hash = "1ae0ddb7b3da2bdbd542d9d75f81364e";

export default node;
