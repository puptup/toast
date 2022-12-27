import { PositionsKeysType } from "@constants";
import { Toast } from "@types";
/** @deprecated * */
class ToastService {
  private toasts: Toast[] = [];
  private rerenderFunc: { [key in PositionsKeysType]?: () => void } = {};
  private instance: ToastService | null = null;

  setRerenderFunction = (position: PositionsKeysType, rerender: () => void) => {
    this.rerenderFunc[position] = rerender;
  };

  rerender = (position: PositionsKeysType) => {
    const func = this.rerenderFunc[position];
    if (func) {
      func();
    }
  };

  addToast = (toast: Toast) => {
    this.toasts.push(toast);
    this.rerender(toast.position);
  };

  removeToast = (toast: Toast) => {
    this.toasts = this.toasts.filter((toastElement) => toastElement.id !== toast.id);
    this.rerender(toast.position);
  };

  getToasts = () => {
    return this.toasts;
  };
}

// const toastService = new ToastService();

// export default toastService;
