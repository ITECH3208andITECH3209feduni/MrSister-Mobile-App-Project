import React from "react";

import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import Layout from "../components/Layout";

const DashboardScreen = ({ route, navigation }) => {
  const getUserEmail = () => {
    if (route.params) {
      const { userEmail } = route.params;
      console.log("DashboardScreem : Email Address-->", userEmail);
      return userEmail;
    }
    return "";
  };

  const userEmail = getUserEmail();

  return (
    <Layout>
      <Text style={styles.title}>What you want to do ?</Text>
      <TouchableOpacity
        style={styles.createOrderButton}
        onPress={() =>
          navigation.navigate("SuppliersScreen", {
            userEmail,
          })
        }
      >
        <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
          Create a Order
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewInvoiceButton}>
        <Text
          style={{ fontSize: 20, color: "#fff", textAlign: "center" }}
          onPress={() => navigation.navigate("InvoicesScreen", { userEmail })}
        >
          View Invoices
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            ToastAndroid.show("Logged Out!", ToastAndroid.SHORT);
            navigation.navigate("LoginScreen");
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 20,
    marginTop: 200,
    fontWeight: "bold",
    textAlign: "center",
  },
  createOrderButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#19789e",
  },
  viewInvoiceButton: {
    marginTop: 10,

    padding: 10,
    borderRadius: 5,
    backgroundColor: "#19239e",
  },
  reportDelivery: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#19723e",
  },
  logoutButton: {
    width: 120,
    marginTop: 180,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#19193e",
  },
});

DashboardScreen.propTypes = {};

export default DashboardScreen;
