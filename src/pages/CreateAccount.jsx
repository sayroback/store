import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { Input } from "../components/Input";

import { Titles } from "../components/Titles";

export const CreateAccount = () => {
  return (
    <div className="login">
      <div id="down" className="form">
        <div>
          <Titles title="My account" />
          <form action="">
            <Input label="Name" placeholder="Your Name" />
            <Input label="Email address" placeholder="example@gmail.com" />
            <Input label="Password" placeholder="******" />
          </form>
        </div>
        <div className="down">
          <Link to="/login">
            <ButtonPrimary>Create account</ButtonPrimary>
          </Link>
        </div>
      </div>
    </div>
  );
};
