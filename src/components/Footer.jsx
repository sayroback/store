import React from "react";
import { GitHubIcon } from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Made with 💚{" "}
        <a
          href="https://github.com/sayroback/store"
          rel="noreferrer noopener"
          target="_blank"
        >
          Source code
        </a>
      </p>
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/juan-manuel-calder%C3%B3n-robles-ab950993"
          rel="noreferrer noopener"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/sayroback"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
};
