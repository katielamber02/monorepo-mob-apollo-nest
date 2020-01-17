import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";

import Root from './Root'

const client = new ApolloClient({
    uri: "http://localhost:3016/graphql",
    credentials: "include"  // $
});

export default function App() {
    return (
        <ApolloProvider client={client}>

            <Root />
        </ApolloProvider>
    );
}

