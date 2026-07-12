import { type ValidationError } from "ajv";
import mod from "ajv/dist/runtime/validation_error.js";
import { getDefault } from "../utils.ts";

export default getDefault<typeof ValidationError>(mod);
