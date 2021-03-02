import * as React from "react";
import { Banner } from "./styles";

const SubmitBar = () => {
  return (
    <div className="container">
      <Banner>
        <div>If you would like us to add another star, let us know!</div>
        <div>
          <button>Submit</button>
        </div>
      </Banner>
    </div>
  );
};

export default SubmitBar;
