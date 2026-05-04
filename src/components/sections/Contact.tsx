import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Thanks — we'll be in touch within a day.");
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="container relative z-10 max-w-3xl">
        <div className="text-center mb-12">
          <p className="font-mono text-sm text-primary mb-4">{"// 04 — contact"}</p>
          <h2 className="font-mono text-4xl md:text-5xl font-semibold tracking-tight">
            Let's build something.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about the problem. We'll reply within one working day.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-card border border-border rounded-2xl p-8"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Name
            </Label>
            <Input id="name" name="name" required maxLength={100} className="bg-background border-border" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Email
            </Label>
            <Input id="email" name="email" type="email" required maxLength={255} className="bg-background border-border" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="company" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Company <span className="text-muted-foreground/60">(optional)</span>
            </Label>
            <Input id="company" name="company" maxLength={100} className="bg-background border-border" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              maxLength={2000}
              className="bg-background border-border resize-none"
              placeholder="What are you building?"
            />
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground font-mono">
              <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@techzy.dev</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Remote · EU / US</span>
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="rounded-full font-mono">
              {submitting ? "Sending…" : (<>Send <ArrowRight className="ml-2 h-4 w-4" /></>)}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;