import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { routes } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Please enter a valid input.").max(2000),
});

const fieldOrder = ["name", "email", "company", "message"] as const;

const withErrorPrefix = (message: string) =>
  message.toLowerCase().startsWith("error:") ? message : `Error: ${message}`;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<(typeof fieldOrder)[number], string>>>({});
  const [formStatus, setFormStatus] = useState("");

  const clearFieldError = (field: (typeof fieldOrder)[number]) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("");
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Partial<Record<(typeof fieldOrder)[number], string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (key === "name" || key === "email" || key === "company" || key === "message") {
          next[key] = withErrorPrefix(issue.message);
        }
      }
      setErrors(next);
      const first = fieldOrder.find((k) => next[k]);
      setFormStatus(first && next[first] ? next[first] : "Error: Please enter a valid input.");
      queueMicrotask(() => {
        const id = fieldOrder.find((k) => next[k]);
        if (id) document.getElementById(id)?.focus();
      });
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setFormStatus("");
    toast.success("Thanks — we'll be in touch within a day.");
  };

  return (
    <section id="contact" className="py-32 md:py-40 border-t border-border/60" aria-labelledby="contact-heading">
      <div className="container">
        <div className="grid grid-cols-12 gap-10">
          {/* Left: pitch */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">— Contact</p>
              <h2
                id="contact-heading"
                className="font-mono text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05] mb-8"
              >
                Have a problem<br />
                <span className="italic font-light text-muted-foreground">worth solving?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Drop us a line. We respond within one working day — usually with questions, sometimes with a plan.
              </p>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <a
                href="mailto:hello@techzy.dev"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden /> hello@techzy.dev
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" aria-hidden /> Remote · EU / US
              </div>
              <div className="flex items-center gap-4 pt-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social profile (link to be updated)"
                    className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="col-span-12 lg:col-span-7">
            <div aria-live="polite" aria-atomic="true" className="sr-only">
              {formStatus}
            </div>
            <form
              onSubmit={onSubmit}
              className="bg-background/50 backdrop-blur-xl border border-border/60 rounded-3xl p-8 md:p-10 space-y-6"
              aria-describedby="contact-form-description"
              noValidate
            >
              <p id="contact-form-description" className="sr-only">
                All fields marked as required must be completed. Errors are listed below each field.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Name — input field <span className="sr-only">(required)</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-required="true"
                    onChange={() => clearFieldError("name")}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-base h-11"
                  />
                  {errors.name ? (
                    <p id="name-error" className="text-sm text-destructive" role="status">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Email — input field <span className="sr-only">(required)</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={255}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-required="true"
                    onChange={() => clearFieldError("email")}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-base h-11"
                  />
                  {errors.email ? (
                    <p id="email-error" className="text-sm text-destructive" role="status">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="company"
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  Company — input field <span className="sr-only">(optional)</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  maxLength={100}
                  aria-invalid={errors.company ? true : undefined}
                  aria-describedby={errors.company ? "company-error" : undefined}
                  onChange={() => clearFieldError("company")}
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-base h-11"
                />
                {errors.company ? (
                  <p id="company-error" className="text-sm text-destructive" role="status">
                    {errors.company}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  Project brief — input field <span className="sr-only">(required)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={2000}
                  autoComplete="off"
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-required="true"
                  onChange={() => clearFieldError("message")}
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary resize-none text-base"
                  placeholder="What are you building?"
                />
                {errors.message ? (
                  <p id="message-error" className="text-sm text-destructive" role="status">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <div className="pt-4 flex justify-end">
                <Button type="submit" disabled={submitting} size="lg" className="rounded-full font-mono group">
                  {submitting ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message{" "}
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-32 pt-8 border-t border-border/60 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-xs text-muted-foreground flex flex-col gap-1">
            <span>© {new Date().getFullYear()} TechZy Studio</span>
            <span>Engineered with care · Remote-first</span>
          </div>
          <Button asChild size="sm" className="rounded-full font-mono w-full md:w-auto shrink-0">
            <Link to={routes.contact}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
