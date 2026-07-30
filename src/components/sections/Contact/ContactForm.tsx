import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { emailConfig } from "../../../config/email";
import type { ContactFormData } from "../../../types/contactForm";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSending(true);
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        data,
        emailConfig.publicKey
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-primary"
          {...register("from_name", { required: "Name is required" })}
        />
        {errors.from_name && (
          <p className="mt-2 text-sm text-red-400">
            {errors.from_name.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-primary"
          {...register("from_email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
        />
        {errors.from_email && (
          <p className="mt-2 text-sm text-red-400">
            {errors.from_email.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-primary"
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p className="mt-2 text-sm text-red-400">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none resize-none focus:border-primary"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-xl bg-primary px-6 py-4 font-semibold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
