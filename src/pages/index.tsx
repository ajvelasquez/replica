import * as React from "react";
import DisclaimerBar from "../components/DisclaimerBar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import SubmitBar from "../components/SubmitBar";
import VotingBoxes from "../components/VotingBoxes";

const IndexPage = () => {
  return (
    <Layout>
      <Showcase />
      <DisclaimerBar />
      <VotingBoxes />
      <SubmitBar />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
