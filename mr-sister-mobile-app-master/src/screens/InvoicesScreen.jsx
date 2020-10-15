import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Layout from "../components/Layout";
import { API_BASE_URL } from "../config";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import IndividualInvoice from "../components/IndividualInvoice";

const InvoicesScreen = ({ route, navigation }) => {
  const [invoices, setInvoices] = useState([]);

  const userEmail = route.params.userEmail;

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/invoices`);
      setInvoices(res.data);
    } catch (e) {
      console.log("Some error occurred");
    }
  };

  console.log("Invoices", invoices);

  return (
    <Layout>
      {invoices.map((invoice) => {
        return (
          <TouchableOpacity
            key={invoice.referenceNo}
            onPress={() =>
              navigation.navigate("IndividualInvoiceDetail", {
                ...invoice,
                userEmail,
              })
            }
          >
            <IndividualInvoice {...invoice} />
          </TouchableOpacity>
        );
      })}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});

InvoicesScreen.propTypes = {};

export default InvoicesScreen;
