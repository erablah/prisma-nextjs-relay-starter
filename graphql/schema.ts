import { builder } from "./builder";
import "./types/Tuitions";
import "./types/Tutor";
import "./types/User";


export const schema = builder.toSchema()