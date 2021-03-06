import React from "react";
import { Input } from "../components/Input";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { Titles } from "../components/Titles";
import { TextLink } from "../components/TextLink";
import { Link } from "react-router-dom";

export const PasswordRecovery1 = () => {
  return (
    <>
      <div className="login">
        <div className="form">
          <Titles
            title="Password recovery"
            subtitle="Inform the email address used to create your account"
          />
          <form action="">
            <Input label="Email address" placeholder="examples@gmail.com" />
            <Link to="/login/password_recovery2">
              <ButtonPrimary>Submit</ButtonPrimary>
            </Link>
          </form>
          <TextLink
            classLink={"login__link"}
            link="Back to log in"
            url="/login"
          />
        </div>
      </div>
    </>
  );
};
