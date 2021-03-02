import * as React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Replica</title>
        <meta
          name="description"
          content="This is just a test site to learn Netlify."
        ></meta>
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
