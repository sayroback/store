import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { Icon } from "../components/icons/Icon";
import { TextLink } from "../components/TextLink";
import { Titles } from "../components/Titles";

const PasswordRecovery2 = () => {
  return (
    <>
      <div className="login">
        <div className="form">
          <Titles
            title="Email has been sent!"
            subtitle="Please check your inbox for instructions on how to reset the password"
          />
          <div className="container__sent-mail">
            <div className="sent-mail">
              <Icon>mail</Icon>
            </div>
          </div>
          <Link to="/login/new_password">
            <ButtonPrimary>Login</ButtonPrimary>
          </Link>
          <TextLink
            classLink={"login__link"}
            label="Didn't receive the email?"
            link="Resend"
            url="/password_recovery1"
          />
        </div>
      </div>
    </>
  );
};

export default PasswordRecovery2;
