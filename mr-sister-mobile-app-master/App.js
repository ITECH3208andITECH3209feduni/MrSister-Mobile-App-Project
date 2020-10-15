import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import SuppliersScreen from "./src/screens/SuppliersScreen";
import SupplierItems from "./src/components/SupplierItems";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "./src/screens/DashboardScreen";
import InvoicesScreen from "./src/screens/InvoicesScreen";
import IndividualInvoiceDetail from "./src/components/IndividualInvoiceDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="SuppliersScreen" component={SuppliersScreen} />
        <Stack.Screen name="InvoicesScreen" component={InvoicesScreen} />
        <Stack.Screen name="SupplierItems" component={SupplierItems} />
        <Stack.Screen
          name="IndividualInvoiceDetail"
          component={IndividualInvoiceDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
