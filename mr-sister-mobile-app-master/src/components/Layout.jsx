import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.contentContainer}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "white",
  },
  actionBar: {
    backgroundColor: "red",
  },
  statusBar: {
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 10,
  },
});

export default Layout;
