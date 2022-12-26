import { AnimationINKeysType, AnimationOUTKeysType } from "@animation";
import { PositionsKeysType, VariantsKeys } from "@constants";

export interface Toast {
  id: string;
  type: VariantsKeys;
  gap: number;
  position: PositionsKeysType;
  animationIn: AnimationINKeysType;
  animationOut: AnimationOUTKeysType;
  animationDuration: number;
  timeToDelete: number;
  title: string;
  description: string;
}
