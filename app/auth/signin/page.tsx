"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthHeader } from "@/components/auth/auth-header";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    // TODO: Implement Google Sign In
    setIsLoading(false);
  };

  const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement Email Sign In
    setIsLoading(false);
  };

  return (
    <>
      <AuthHeader />
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden">
        {/* Decorative blurred circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
          style={{ opacity: 0.2 }}
        />

        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-500/20 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-500/20 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-emerald-500/20 rounded-full animate-pulse delay-700" />
        </div>

        <div className="pt-16 w-full max-w-[400px] mx-auto px-4">
          <Card className="border-zinc-800 bg-zinc-900/90 backdrop-blur-sm relative z-10">
            <CardHeader>
              <CardTitle className="text-xl text-white">Welcome back</CardTitle>
              <CardDescription className="text-zinc-400">Sign in to your account to continue</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailSignIn}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email" className="text-zinc-400">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password" className="text-zinc-400">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                      required
                    />
                  </div>
                </div>
                <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white" type="submit" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="relative w-full">
                <div className="absolute inset-x-0 top-1/2 h-px bg-zinc-800" />
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-zinc-900 px-2 text-zinc-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
              >
                <FcGoogle className="mr-2 h-4 w-4" />
                Sign in with Google
              </Button>
              <p className="text-sm text-center text-zinc-400">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-emerald-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
} 