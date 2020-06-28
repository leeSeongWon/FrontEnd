import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainPage from "./pages";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Helmet>
        <title>OIDC</title>
        <meta name="description" content="OIDC 공모전 페이지입니다." />
        <meta property="fb:app_id" content="" />
        <meta property="og:image" content="" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;