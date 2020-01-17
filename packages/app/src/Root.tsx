
import React from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo-hooks";
import Heart from './Heart'

const SIGNUP = gql`
  mutation Signup($signupInput:SignupInput!){
  signup(signupInput:$signupInput){
    path
    message
  }
}
`;

export default function Root() {
    const register = useMutation(SIGNUP, {
        variables: {
            signupInput: {
                email: "me1@gmail.com",
                password: "123456",
                userName: "CCCC"
            }
        }
    });

    return (

        <View style={styles.container}>
            <Text >MY TEXT</Text>
            <Heart
                color="#17cbc4"
                height={30}
                width={30}
                onPress={() => alert("Hello")}
            />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});