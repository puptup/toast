import { AnimationINKeysType, AnimationOUTKeysType } from "@animation";
import { PositionsKeysType, VariantsKeysType } from "@constants";

export interface Toast {
  id: string;
  type: VariantsKeysType;
  position: PositionsKeysType;
  animationIn: AnimationINKeysType;
  animationOut: AnimationOUTKeysType;
  animationDuration: number;
  timeToDelete: number;
  spaceBetweenToasts: number;
  spaceToEdge: number;
  title: string;
  description: string;
}
