import Animation, { AnimationINKeysType, AnimationOUTKeysType } from "@animation";

const { AnimationIN, AnimationOUT } = Animation;

const useAnimation = (nameIn: AnimationINKeysType, nameOut: AnimationOUTKeysType) => {
  return {
    keyframeIn: AnimationIN[nameIn],
    keyframeOut: AnimationOUT[nameOut],
  };
};

export default useAnimation;
