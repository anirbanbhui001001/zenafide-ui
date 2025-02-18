
import { InsightType } from "./common";

export type Insight = {
  id: string;
  name: string;
  folder?: string;
  type: "table_of_contents" | "summary";
  content?: string;
  // Special attributes for parent reference
  parent: "regulation" | "project";
  parent_id: string;
};
