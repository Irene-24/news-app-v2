import type { NextPage } from "next";

import { Categories } from "@/utils/constants";
import Page from "@/components/Page";

const Business: NextPage = () => {
  return (
    <Page
      category={Categories.business}
      seoTitle="Business"
      pageTitle="Business Today"
    />
  );
};

export default Business;
