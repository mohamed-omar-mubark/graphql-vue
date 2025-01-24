import { createApp, provide, h } from "vue";
import App from "./App.vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: "http://localhost:8080/graphql", // Your GraphQL endpoint
});

// Cache implementation
const cache = new InMemoryCache();

// Create Apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true, // Enable Apollo Devtools
});

// Create Vue app
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.mount("#app");
