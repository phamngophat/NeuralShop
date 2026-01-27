import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl rounded-2xl shadow-sm">
        <CardContent className="p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Next.js • Tailwind CSS • ShadCN UI</p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Lab 1 – Login Interface
            </h1>
            <p className="text-muted-foreground">
              A clean, responsive split-layout login page. Built for FPT Lab submission.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="rounded-xl">
              <Link href="/login">Open Login Page</Link>
            </Button>

            <Button asChild variant="outline" className="rounded-xl">
              <Link href="https://github.com/" target="_blank">
                GitHub (add later)
              </Link>
            </Button>
          </div>

          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Responsive layout (mobile friendly)</li>
            <li>Split layout: image (left) + form (right)</li>
            <li>ShadCN UI components: Button, Card, Input, Label</li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
