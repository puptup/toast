import { AnimationINKeysType, AnimationOUTKeysType } from "@animation";
import { PositionsKeysType, VariantsKeysType } from "@constants";

export interface Toast {
  id: string;
  type: VariantsKeysType;
  gap: number;
  position: PositionsKeysType;
  animationIn: AnimationINKeysType;
  animationOut: AnimationOUTKeysType;
  animationDuration: number;
  timeToDelete: number;
  title: string;
  description: string;
}
