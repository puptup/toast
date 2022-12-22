import toastService from "@service";

const useToasts = () => {
  return {
    addToast: toastService.addToast,
  };
};

export default useToasts;
