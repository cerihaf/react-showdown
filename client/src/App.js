import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AuthService from "./utils/auth";
import { Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1 flex justify-center bg-charcoal">
            <Switch>
              <Route exact path="/">
                {!AuthService.loggedIn() ? <Redirect to="/login" /> : <Home />}
              </Route>
              <Route exact path="/login" component={Login} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
