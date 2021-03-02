import * as React from "react";
import { Helmet } from "react-helmet";
import '@fortawesome/fontawesome-svg-core/styles.css';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
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
