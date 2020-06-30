import React from "react";
import Button from "@material-ui/core/Button";
const salesportal = (props) => {
  return (
    <div>
      <h1>Hello {props.userName}, Welcome to Sales Portal Dashboard.</h1>

      <div className="logout">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => props.signOut()}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default salesportal;
