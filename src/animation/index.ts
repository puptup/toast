import AnimationIN from "./animationsIN";
import AnimationOUT from "./animationsOUT";

export type AnimationINKeysType = keyof typeof AnimationIN;
export type AnimationOUTKeysType = keyof typeof AnimationOUT;

export default { AnimationIN, AnimationOUT };
