import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ================= LEFT: COVER ================= */}
        <section className="relative hidden lg:block">
          <Image
            src="/auth-v7.jpg" // 👉 đặt ảnh trong /public/auth1.jpg
            alt="Login cover"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-indigo-600/40" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <span className="font-semibold">N</span>
              </div>
              <div>
                <p className="text-sm font-medium">Next UI Lab</p>
                <p className="text-xs opacity-70">Tailwind + shadcn/ui</p>
              </div>
            </div>

            {/* Text */}
            <div className="max-w-md">
              <h1 className="text-4xl font-semibold leading-tight">
                Welcome back ✨
              </h1>
              <p className="mt-3 text-sm text-white/80">
                A modern, clean, and responsive login interface built with
                Next.js and Tailwind CSS.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/15">
                  <p className="font-medium">Modern</p>
                  <p className="mt-1 text-white/70">Split layout</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/15">
                  <p className="font-medium">Responsive</p>
                  <p className="mt-1 text-white/70">Mobile friendly</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/15">
                  <p className="font-medium">ShadCN</p>
                  <p className="mt-1 text-white/70">UI components</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-xs text-white/50">
              Lab 1 – Login Interface
            </p>
          </div>
        </section>

        {/* ================= RIGHT: FORM ================= */}
        <section className="flex items-center justify-center p-6 lg:p-10 bg-white">
          <div className="w-full max-w-md">
            {/* Mobile heading */}
            <div className="mb-6 lg:hidden">
              <p className="text-sm text-muted-foreground">Next UI Lab</p>
              <h2 className="text-2xl font-semibold">Welcome back ✨</h2>
            </div>

            <Card className="rounded-2xl border p-6 shadow-sm">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">Sign in</h3>
                <p className="text-sm text-muted-foreground">
                  Use your email and password to continue.
                </p>
              </div>

              <div className="mt-5 grid gap-4">
                {/* Google button (UI demo only) */}
                <Button
                  variant="outline"
                  className="h-11 rounded-xl"
                >
                  <span className="mr-2">G</span>
                  Continue with Google
                </Button>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-muted-foreground">
                      or sign in with email
                    </span>
                  </div>
                </div>

                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-11 rounded-xl"
                    />
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="#"
                        className="text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground"
                      >
                        Forgot?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="h-11 rounded-xl"
                    />
                  </div>

                  <Button className="h-11 rounded-xl">
                    Sign In
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="#"
                      className="underline underline-offset-4 text-foreground"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </Card>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link href="#" className="underline underline-offset-4">
                Terms
              </Link>{" "}
              &{" "}
              <Link href="#" className="underline underline-offset-4">
                Privacy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
