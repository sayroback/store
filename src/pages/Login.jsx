import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { ButtonSecondary } from "../components/ButtonSecondary";
import { Input } from "../components/Input";
import { TextLink } from "../components/TextLink";

export const Login = () => {
  return (
    <>
      <div className="login">
        <div className="form" id="down">
          <div>
            <form action="">
              <Input label="Email address" placeholder="example@gmail.com" />
              <Input label="Password" placeholder="******" />
              <Link to="/">
                <ButtonPrimary>Confirm</ButtonPrimary>
              </Link>
            </form>
            <TextLink
              classLink={"login__link"}
              link="Forgot my password"
              url="password_recovery1"
            />
          </div>
          <Link to="/sing-up">
            <ButtonSecondary>Sing up</ButtonSecondary>
          </Link>
        </div>
      </div>
    </>
  );
};
