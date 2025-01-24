# Vue.js + GraphQL Project

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Apollo](https://img.shields.io/badge/Apollo-311C87?style=for-the-badge&logo=apollographql&logoColor=white)

This project demonstrates how to build a **Vue.js** application integrated with a **GraphQL API**. It includes a backend server built with Apollo Server and a frontend that uses Apollo Client to fetch and display data. The app also features an embedded **GraphQL Playground** for testing queries.

---

## Features

- **GraphQL Server**:
  - Built with **Apollo Server**.
  - Provides a simple API with queries for `hello` and `users`.
  - Introspection enabled for schema exploration.

- **Vue.js Frontend**:
  - Uses **Apollo Client** to connect to the GraphQL API.
  - Fetches and displays user data in a list.
  - Handles loading and error states.

- **GraphQL Playground**:
  - Embedded directly in the app for testing queries and mutations.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation

**Clone the repository**:
   ```bash
   git clone git@github.com:mohamed-omar-mubark/graphql-vue.git
   cd graphql-vue
   npm install
   node server.js
   npm run dev
   ```

**Project Structure**

```bash
graphql-vue/
├── server.js               # GraphQL server (Apollo Server)
├── src/
│   ├── main.js             # Vue app entry point
│   ├── App.vue             # Main Vue component
│   └── graphql/            # GraphQL queries
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

### Example Queries

- Here are some example queries you can run in the GraphQL Playground:

**Fetch Hello Message**
```bash
query {
  hello
}
```

**Fetch Users**
```bash
query {
  users {
    id
    name
    email
  }
}
```