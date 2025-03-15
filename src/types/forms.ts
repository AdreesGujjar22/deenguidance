export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  className?: string;
}
