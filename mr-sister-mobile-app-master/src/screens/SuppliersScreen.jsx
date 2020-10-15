import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Layout from "../components/Layout";

import SupplierList from "../components/SupplierList";
import axios from "axios";
import { API_BASE_URL } from "../config";

const SuppliersScreen = ({ route, navigation }) => {
  const getUserEmail = () => {
    if (route.params) {
      const { userEmail } = route.params;
      console.log("SuppliersScreen userEmail=>", userEmail);
      return userEmail;
    }
    return "";
  };

  const userEmail = getUserEmail();

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchSupplierData();
  }, []);

  const fetchSupplierData = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/suppliers`);
      setSuppliers(res.data);
    } catch (e) {
      console.log("Some error occurred");
    }
  };

  return (
    <Layout headerTitle="Suppliers">
      {suppliers.map((supplier) => {
        return (
          <TouchableOpacity
            key={supplier._id}
            onPress={() =>
              navigation.navigate("SupplierItems", {
                name: supplier.name,
                supplierEmail: supplier.email,
                items: supplier.items,
                userEmail,
              })
            }
          >
            <SupplierList supplier={supplier} />
          </TouchableOpacity>
        );
      })}
    </Layout>
  );
};

export default SuppliersScreen;
