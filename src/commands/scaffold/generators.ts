import { consola } from "consola";
import { type DBField } from "../../utils.js";
import { generateModelContent } from "./utils.js";

export function scaffoldResource(schema: {
  tableName: string;
  fields: DBField[];
}) {
  const { tableName, fields } = schema;
  createModel(tableName, fields);
  // createAPIRoutes(tableName, fields);
  // createViews
  // Other scaffolding logic here (e.g., views, tests, etc.)
}

function createModel(tableName: string, fields: DBField[]) {
  // Logic to create the model file
  console.log(tableName, fields);

  consola.info("reached function");
  console.log("model -> ", generateModelContent(tableName, fields, "pg"));
}

// function createAPIRoutes(tableName: string, properties: DBField[]) {
//   // Logic to create the controller file
//   console.log(tableName, properties);
// }