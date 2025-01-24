<template>
  <div>
    <h1>GraphQL + Vue3</h1>
    <h1>Users List</h1>

    <!-- Loading State -->
    <p v-if="loading">Loading...</p>

    <!-- Error State -->
    <p v-if="error">Error: {{ error.message }}</p>

    <!-- Data Display -->
    <ul v-if="data">
      <li v-for="user in data.users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useQuery } from "@vue/apollo-composable";
  import { GET_USERS } from "./graphql/queries";

  // Fetch data using useQuery
  const { result, loading, error } = useQuery(GET_USERS);

  // Convert result to a reactive ref
  const data = ref(result);
</script>
