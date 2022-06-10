import React from "react";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";

export const Login = () => {
  return (
    <main className="Login">
      <Logo />
      <form action="">
        <Input label="Email address" placeholder="example@gmail.com" />
      </form>
    </main>
  );
};
