"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { GradientShadowButtonforSignIn } from "../hover.me/button";
import toast from "react-hot-toast";

export function SigninFormDemo() {
  const [formData, setFormData] = useState({
    // firstname: "",
    // lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if both email and password have inputs
    if (!formData.email || !formData.password) {
      toast.error("Please fill in both email and password.");
      return; // Prevent submission if validation fails
    }
    if (formData.email || formData.password) {
      toast.error("User and password not found");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
      return; // Prevent submission if validation fails
    }

    console.log("Form submitted", formData);

    setFormData({
      // firstname: "",
      // lastname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="my-6 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl md:text-2xl text-neutral-800 dark:text-neutral-200">
        Join Keybolt
      </h2>
      <p className="text-neutral-600 text-sm md:text-base max-w-sm mt-2 dark:text-neutral-300">
        Sign in to discover how our AI tools can help your local business thrive.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="johnmic@fc.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <GradientShadowButtonforSignIn
          value={"Sign in"}
          Icon={BottomGradient}
          onClick={() => { }}
        />
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
