import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerMenu}>MENU</Text>
      </View>
      <Text style={styles.actionBarTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#19789e",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    color: "green",
  },
  headerMenu: {
    color: "#ebebeb",
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 30,
  },

  actionBarTitle: {
    color: "#ebebeb",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
