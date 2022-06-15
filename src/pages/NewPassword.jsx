import React from "react";
import { Input } from "../components/Input";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { Titles } from "../components/Titles";
import { Link } from "react-router-dom";

export const NewPassword = () => {
  return (
    <>
      <div className="login">
        <div className="form">
          <Titles
            title="Create a new password"
            subtitle="Enter a new password for you account"
          />
          <form action="">
            <Input label="Password" placeholder="******" />
            <Input label="Re-enter password" placeholder="******" />
            <Link to="/login">
              <ButtonPrimary>Confirm</ButtonPrimary>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
