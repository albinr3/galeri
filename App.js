import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { Image } from 'expo-image';



function Index(props) {
  SplashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts({
    Roboto_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.rect7Filler}></View>
      <View style={styles.rect7}>
      <View style={styles.rect2}>
        <TouchableOpacity style={styles.button2}>
        <Image
            source={require('./assets/images/IMG_2958.jpg')}
            contentFit="contain"
            style={styles.image}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.album13}>Album1</Text>
        <Text style={styles.text}>67</Text>
      </View>
        <View style={styles.group}>
          <View style={styles.rect8}>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
            <Text style={styles.album14}>Album1</Text>
            <Text style={styles.text}>67</Text>
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.rect9}>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
            <Text style={styles.album15}>Album1</Text>
            <Text style={styles.text}>67</Text>
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.rect10}>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
            <Text style={styles.album16}>Album1</Text>
            <Text style={styles.text}>67</Text>
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.rect11}>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
            <Text style={styles.album17}>Album1</Text>
            <Text style={styles.text}>67</Text>
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.rect12}>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
            <Text style={styles.album18}>Album1</Text>
            <Text style={styles.text}>67</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 360,
    height: 657
  },
  rect7Filler: {
    flex: 1,
    flexDirection: "row"
  },
  rect7: {
    width: 360,
    height: 553,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "space-evenly",
    alignSelf: "flex-end",
    marginBottom: -35
  },
  group: {
    width: 90,
    height: 132,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5
  },
  rect2: {
    width: 90,
    height: 132,
    overflow: "visible"
  },
  button2: {
    width: 100,
    height: 100,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(157,156,156,1)",
    borderRadius: 21
  },
  album13: {
    fontFamily: "Roboto_400Regular",
    color: "#121212",
    marginTop: 3,
    marginLeft: 6
  },
  text: {
    fontFamily: "Roboto_400Regular",
    color: "rgba(156,156,156,1)",
    lineHeight: 14,
    fontSize: 10,
    marginLeft: 6,
  
  },
  group2: {
    width: 90,
    height: 132,
    margin: 0,
    marginRight: 14
  },
  rect8: {
    width: 90,
    height: 132,
    overflow: "visible"
  },
  button3: {
    width: 90,
    height: 90,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(157,156,156,1)",
    borderRadius: 21
  },
  album14: {
    fontFamily: "Roboto_400Regular",
    color: "#121212",
    marginTop: 3,
    marginLeft: 6
  },
  text2: {
    fontFamily: "Roboto_400Regular",
    color: "rgba(156,156,156,1)",
    lineHeight: 14,
    fontSize: 10,
    marginTop: 17,
    marginLeft: 6
  },
  group3: {
    width: 90,
    height: 132,
    margin: 0,
    marginRight: 14
  },
  rect9: {
    width: 90,
    height: 132,
    overflow: "visible"
  },
  button4: {
    width: 90,
    height: 90,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(157,156,156,1)",
    borderRadius: 21
  },
  album15: {
    fontFamily: "Roboto_400Regular",
    color: "#121212",
    marginTop: 3,
    marginLeft: 6
  },
  text3: {
    fontFamily: "Roboto_400Regular",
    color: "rgba(156,156,156,1)",
    lineHeight: 14,
    fontSize: 10,
    marginTop: 17,
    marginLeft: 6
  },
  group4: {
    width: 90,
    height: 132,
    margin: 0,
    marginRight: 14
  },
  rect10: {
    width: 90,
    height: 132,
    overflow: "visible"
  },
  button5: {
    width: 90,
    height: 90,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(157,156,156,1)",
    borderRadius: 21
  },
  album16: {
    fontFamily: "Roboto_400Regular",
    color: "#121212",
    marginTop: 3,
    marginLeft: 6
  },
  text4: {
    fontFamily: "Roboto_400Regular",
    color: "rgba(156,156,156,1)",
    lineHeight: 14,
    fontSize: 10,
    marginTop: 17,
    marginLeft: 6
  },
  group5: {
    width: 90,
    height: 132,
    margin: 0,
    marginRight: 14
  },
  rect11: {
    width: 90,
    height: 132,
    overflow: "visible"
  },
  button6: {
    width: 90,
    height: 90,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(157,156,156,1)",
    borderRadius: 21
  },
  album17: {
    fontFamily: "Roboto_400Regular",
    color: "#121212",
    marginTop: 3,
    marginLeft: 6
  },
  text5: {
    fontFamily: "Roboto_400Regular",
    color: "rgba(156,156,156,1)",
    lineHeight: 14,
    fontSize: 10,
    marginTop: 17,
    marginLeft: 6
  },
  group6: {
    width: 90,
    height: 132,
    margin: 0,
    marginRight: 14
  },
  rect12: {
    width: 90,
    height: 132,
    overflow: "visible"
  },
  button7: {
    width: 90,
    height: 90,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(157,156,156,1)",
    borderRadius: 21
  },
  album18: {
    fontFamily: "Roboto_400Regular",
    color: "#121212",
    marginTop: 3,
    marginLeft: 6
  },
  text6: {
    fontFamily: "Roboto_400Regular",
    color: "rgba(156,156,156,1)",
    lineHeight: 14,
    fontSize: 10,
    marginTop: 17,
    marginLeft: 6
  },
  image: {
    width: 96,
    height: 95,
    alignSelf: "center",
    borderRadius: 21
  },
});

export default Index;
