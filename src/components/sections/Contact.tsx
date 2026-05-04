import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
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
    <section id="contact" className="py-32 md:py-40 border-t border-border/60">
      <div className="container">
        <div className="grid grid-cols-12 gap-10">
          {/* Left: pitch */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">— Contact</p>
              <h2 className="font-mono text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05] mb-8">
                Have a problem<br />
                <span className="italic font-light text-muted-foreground">worth solving?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Drop us a line. We respond within one working day — usually with questions, sometimes with a plan.
              </p>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <a href="mailto:hello@techzy.dev" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" /> hello@techzy.dev
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Remote · EU / US
              </div>
              <div className="flex items-center gap-4 pt-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social"
                    className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="col-span-12 lg:col-span-7">
            <form onSubmit={onSubmit} className="bg-background/50 backdrop-blur-xl border border-border/60 rounded-3xl p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Name</Label>
                  <Input id="name" name="name" required maxLength={100} className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-base h-11" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-base h-11" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Company (optional)</Label>
                <Input id="company" name="company" maxLength={100} className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-base h-11" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Project brief</Label>
                <Textarea id="message" name="message" rows={5} required maxLength={2000}
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary resize-none text-base"
                  placeholder="What are you building?" />
              </div>
              <div className="pt-4 flex justify-end">
                <Button type="submit" disabled={submitting} size="lg"
                  className="rounded-full font-mono group">
                  {submitting ? "Sending…" : (<>Send message <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>)}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-32 pt-8 border-t border-border/60 flex flex-col md:flex-row gap-4 md:items-center md:justify-between font-mono text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} TechZy Studio</div>
          <div>Engineered with care · Remote-first</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
