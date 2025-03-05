import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

/**
 * CallAPI Component
 * Purpose: Fetches and displays posts from JSONPlaceholder API
 * Features: Loading states, error handling, data display
 */
const CallAPI: React.FC = () => {
  // State management for API data and UI states
  const [data, setData] = useState<any[]>([]); // Array to store multiple posts
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track any errors

  /**
   * fetchData Function
   * Purpose: Fetch posts from JSONPlaceholder API
   * Returns: Promise<void>
   */
  const fetchData = async () => {
    try {
      // Make HTTP GET request to fetch all posts
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts" // API endpoint for all posts
      );

      // Check if the response was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse JSON response
      const result = await response.json();

      // Update data state with received posts
      setData(result);
    } catch (error) {
      // Handle errors appropriately
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      // Always set loading to false after request completion
      setLoading(false);
    }
  };

  /**
   * useEffect Hook
   * Purpose: Fetch data when component mounts
   * Dependencies: Empty array means runs only once on mount
   */
  useEffect(() => {
    fetchData();
  }, []);

  // Render loading state
  if (loading) return <Text>Loading...</Text>;

  // Render error state
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      {/*
       * FlatList Component
       * Purpose: Efficiently render large lists of data
       * Features: Virtualization, key extraction, scroll handling
       */}
      <FlatList
        // Data source for the list
        data={data}
        // Render individual post items
        renderItem={({ item }) => (
          <View style={styles.post}>
            {/* Display post ID */}
            <Text style={styles.id}>ID: {item.id}</Text>
            {/* Display post title */}
            <Text style={styles.title}>{item.title}</Text>
            {/* Display post body */}
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
        // Unique key for each item (required by React)
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CallAPI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  post: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  id: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  body: {
    fontSize: 14,
    color: "#666",
  },
});
