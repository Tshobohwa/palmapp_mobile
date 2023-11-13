import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FormsStack from "./FormsStack";
import AuthenticationStack from "./AuthenticationStack";
import AppStack from "./AppStack";
import { createSwitchNavigator } from "react-navigation-switch";
import { useSelector } from "react-redux";

const SwitchNavigator = createSwitchNavigator();

const MainNavigator = () => {
  const { user } = useSelector((store) => store.user);
  const { newReport } = useSelector((store) => store.reports);
  return (
    <NavigationContainer>
      <SwitchNavigator.Navigator
        initialRouteName={!user ? "authentication" : "app"}
      >
        {!user ? (
          <SwitchNavigator.Screen
            name="authentication"
            component={AuthenticationStack}
          />
        ) : (
          <>
            {!newReport ? (
              <SwitchNavigator.Screen name="app" component={AppStack} />
            ) : (
              <></>
            )}
            <SwitchNavigator.Screen name="forms" component={FormsStack} />
          </>
        )}
      </SwitchNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
