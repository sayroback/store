import React from "react";
import { Logo } from "../components/Logo";
import { Input } from "../components/Input";
import { ButtonPrimary } from "../components/ButtonPrimary";
import Titles from "../components/Titles";

export const NewPassword = () => {
  return (
    <div className="new-password">
      <Logo />
      <Titles
        title="Create a new password"
        subtitle="Enter a new password for you account"
      />
      <form className="form" action="">
        <Input label="Password" placeholder="******" />
        <Input label="Re-enter password" placeholder="******" />
        <ButtonPrimary>Confirm</ButtonPrimary>
      </form>
    </div>
  );
};
