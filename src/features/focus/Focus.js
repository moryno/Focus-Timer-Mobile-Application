import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from "../../components/RoundedButton"

export default Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{flex: 1, marginRight: 10}} onSubmitEditing={({nativeEvent}) => {setSubject(nativeEvent.text)}} />
          <RoundedButton title="+" size={50} onPress={() => {addSubject(subject)}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
});
