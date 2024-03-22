/**
 * @generated SignedSource<<c92e4fd39e7ca209ef4e1be83926741b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TuitionType = "FORTY" | "TWENTY" | "%future added value";
export type TutorCardCreateTuitionMutation$variables = {
  couponId: string;
  endTime: string;
  startTime: string;
  tutorId: string;
  type: TuitionType;
  userId: string;
};
export type TutorCardCreateTuitionMutation$data = {
  readonly createTuition: {
    readonly tutor: {
      readonly id: string;
      readonly tuitions: ReadonlyArray<{
        readonly id: string;
      }>;
    };
    readonly user: {
      readonly id: string;
      readonly tuitions: ReadonlyArray<{
        readonly id: string;
      }>;
    };
  };
};
export type TutorCardCreateTuitionMutation = {
  response: TutorCardCreateTuitionMutation$data;
  variables: TutorCardCreateTuitionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "couponId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "endTime"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "startTime"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tutorId"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "type"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  (v6/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Tuition",
    "kind": "LinkedField",
    "name": "tuitions",
    "plural": true,
    "selections": [
      (v6/*: any*/)
    ],
    "storageKey": null
  }
],
v8 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "couponId",
            "variableName": "couponId"
          },
          {
            "kind": "Variable",
            "name": "endTime",
            "variableName": "endTime"
          },
          {
            "kind": "Variable",
            "name": "startTime",
            "variableName": "startTime"
          },
          {
            "kind": "Variable",
            "name": "tutorId",
            "variableName": "tutorId"
          },
          {
            "kind": "Variable",
            "name": "type",
            "variableName": "type"
          },
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateTuitionPayload",
    "kind": "LinkedField",
    "name": "createTuition",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Tutor",
        "kind": "LinkedField",
        "name": "tutor",
        "plural": false,
        "selections": (v7/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": (v7/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TutorCardCreateTuitionMutation",
    "selections": (v8/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "TutorCardCreateTuitionMutation",
    "selections": (v8/*: any*/)
  },
  "params": {
    "cacheID": "055d68c7565cd22acf3c35a0a21c12ec",
    "id": null,
    "metadata": {},
    "name": "TutorCardCreateTuitionMutation",
    "operationKind": "mutation",
    "text": "mutation TutorCardCreateTuitionMutation(\n  $couponId: String!\n  $tutorId: String!\n  $userId: String!\n  $startTime: String!\n  $endTime: String!\n  $type: TuitionType!\n) {\n  createTuition(input: {couponId: $couponId, userId: $userId, tutorId: $tutorId, startTime: $startTime, endTime: $endTime, type: $type}) {\n    tutor {\n      id\n      tuitions {\n        id\n      }\n    }\n    user {\n      id\n      tuitions {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f9b066bc0b1a784da8c82993234ee4b5";

export default node;
