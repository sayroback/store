import React from "react";
import { Link } from "react-router-dom";

export const TextLink = ({ link, url, label, ...rest }) => {
  return (
    <Link className={`link ${rest.classLink}`} to={url}>
      {!!label && <p className={`label ${rest.classLabel}`}>{`${label}`}</p>}
      {!!link && <p className={`text ${rest.classText}`}>{`${link}`}</p>}
    </Link>
  );
};
