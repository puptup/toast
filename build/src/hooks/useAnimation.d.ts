import { AnimationINKeysType, AnimationOUTKeysType } from "../animation";
declare const useAnimation: (nameIn: AnimationINKeysType, nameOut: AnimationOUTKeysType) => {
    keyframeIn: import("styled-components").Keyframes;
    keyframeOut: import("styled-components").Keyframes;
};
export default useAnimation;
