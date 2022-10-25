import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import ButtonPrimary from './button'
import { initialArr } from '../utils/data';



export default function Game() {

    useEffect( () => {
       console.log('refresh')
      },[rerender])  

  const [rerender, setRerender] = useState(false);
  let buttonsListArrRow = []
  let buttonsListArrColumn = [];

   displayAlert = () => {
    Alert.alert(
        "Game over",
        "Do you want to play again?",
        [
          {
            text: "Yes",
            onPress: () => setRerender(!rerender)
          },
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ]
      );
  }

  const planePositionRow = Math.floor(Math.random() * 5);
  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ planePositionRow", planePositionRow)
  const planePositionCollumn = Math.floor(Math.random() * 5);
  console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ planePositionCollumn", planePositionCollumn)

  for (var i = 0; i < initialArr.length; i++) {
    var row = initialArr[i];
    for (var j = 0; j < row.length; j++) {
      element = row[j]
      if (planePositionRow === i && planePositionCollumn === j) {
        element.isPlane = true
      }
      buttonsListArrRow.push(
        <ButtonPrimary key={element.id}
          color={element.color}
          isPlane={element.isPlane}
          alert={displayAlert}
        >
        </ButtonPrimary>
      )
    }
    buttonsListArrColumn.push(
      <View style={styles.collumn}>
        {buttonsListArrRow}
      </View>
    );
    buttonsListArrRow = []
  }

  return (
    <View style={styles.container}
    key={rerender}
    >
      <Text style={styles.title}>Plane Game</Text>
      <View style={styles.rowContainer}>
        {buttonsListArrColumn}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 80,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  collumn: {
    flex: 1,
    alignItems: 'center',
  },
  rowContainer: {
    top: 50,
    flexDirection: 'row',
  },
  title:{
    fontSize: 20,
    fontWeight: "bold"
  },
  play: {
    fontSize: 15,
  }
});
