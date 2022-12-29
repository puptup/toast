import { Toast } from "../types";
declare const useToasts: () => {
    addToast: (toast: Partial<Omit<Toast, "id">>) => void;
};
export default useToasts;
