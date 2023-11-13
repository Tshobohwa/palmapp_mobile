import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HavertingForm from "../screens/froms/HavertingForm";
import PruningForm from "../screens/froms/PruningForm";
import WeedingFrom from "../screens/froms/WeedingFrom";
import ManualWeedingForm from "../screens/froms/ManualWeedingForm";
import FertilizationForm from "../screens/froms/FertilizationForm";
import { useSelector } from "react-redux";

const FormsStackNavigator = createNativeStackNavigator();

const FormsStack = () => {
  const { currentReport } = useSelector((store) => store.reports);
  if (!currentReport.operation) return;

  const operationName = currentReport.operation.name.toLowerCase();

  return (
    <FormsStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#048444",
        },
        headerTintColor: "#fff",
      }}
    >
      {(operationName === "haversting" && (
        <FormsStackNavigator.Screen
          name="haversting"
          component={HavertingForm}
          options={{
            title: "Haversting report form",
            headerShadowVisible: false,
          }}
        />
      )) ||
        (operationName === "pruning" && (
          <FormsStackNavigator.Screen
            name="pruning"
            component={PruningForm}
            options={{
              title: "Pruning report form",
              headerShadowVisible: false,
            }}
          />
        )) ||
        (operationName === "weeding" && (
          <FormsStackNavigator.Screen
            name="weeding"
            component={WeedingFrom}
            options={{
              title: "Weeding report form",
              headerShadowVisible: false,
            }}
          />
        )) ||
        (operationName === "fertilization" && (
          <FormsStackNavigator.Screen
            name="fertilization"
            component={FertilizationForm}
            options={{
              title: "Fertilization report form",
              headerShadowVisible: false,
            }}
          />
        )) ||
        (operationName === "manual weeding" && (
          <FormsStackNavigator.Screen
            name="manual weeding"
            component={ManualWeedingForm}
            options={{
              title: "Manual weeding report form",
              headerShadowVisible: false,
            }}
          />
        ))}
    </FormsStackNavigator.Navigator>
  );
};

export default FormsStack;
