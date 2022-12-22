type ToastType = "success" | "warning" | "error" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  gap: number;
  timeToDelete: number;
  title: string;
  description: string;
}
