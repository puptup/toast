import { Toast } from "@types";

class ToastService {
  private toasts: Toast[] = [];
  private rerenderFunc: null | (() => void) = null;

  setRerenderFunction = (rerender: () => void) => {
    this.rerenderFunc = rerender;
  };

  rerender = () => {
    if (this.rerenderFunc) {
      this.rerenderFunc();
    }
  };

  addToast = (toast: Toast) => {
    this.toasts.push(toast);
    this.rerender();
    console.log(this.toasts);
  };

  removeToast = (toastID: string) => {
    this.toasts = this.toasts.filter((toast) => toast.id !== toastID);
    this.rerender();
  };

  getToasts = () => {
    return this.toasts;
  };
}

const toastService = new ToastService();

export default toastService;
