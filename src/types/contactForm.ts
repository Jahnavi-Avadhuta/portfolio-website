export interface ContactFormData extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}