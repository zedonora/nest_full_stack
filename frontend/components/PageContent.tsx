import css from "../assets/PageContent.module.scss";

import Header from "./Head";

import * as React from "react";

function PageContent({ children }: any) {
  return (
    <React.Fragment>
      <Header />
      <div className={css.pageContent}>{children}</div>
    </React.Fragment>
  );
}

export default PageContent;
