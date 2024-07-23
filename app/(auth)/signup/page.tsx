import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="md:w-1/2">Login Form</div>
        <Image
          src={"/signup.png"}
          alt="SignUp"
          width={1000}
          height={1000}
          className="hidden w-1/2 md:block object-cover"
        />
      </div>
    </main>
  );
};

export default SignUpPage;
