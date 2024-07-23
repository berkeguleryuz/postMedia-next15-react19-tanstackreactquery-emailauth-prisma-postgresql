import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to Clodron Social</h1>
            <p className="text-muted-foreground">
              A place where even <span className="font-bold italic">you</span>{" "}
              can find a friend.
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link href={"/login"} className="block text-center hover:underline">
              Already have an account? Login.
            </Link>
          </div>
        </div>
        <Image
          src={"/signup.png"}
          alt="SignUp"
          width={1000}
          height={1000}
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
};

export default SignUpPage;
