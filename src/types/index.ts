import { PositionsKeys, VariantsKeys } from "@constants";

export interface Toast {
  id: string;
  type: VariantsKeys;
  gap: number;
  position: PositionsKeys;
  timeToDelete: number;
  title: string;
  description: string;
}
