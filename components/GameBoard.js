import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Square from "./Square.js";


const GameBoard = () => {
  const[timeLeft, setTimeLeft] = useState(10)

  useEffect(()=>{
    if(!timeLeft) return
    const timerId = setInterval(()=>{
      setTimeLeft(timeLeft - 1)
    },1000)
    return () => clearInterval(timerId)
  },[timeLeft])

    return (
      <View style= {styles.container}>
      <Text>Whack-a-mole-App</Text>
      <Text> {timeLeft} </Text>
        <View style={styles.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        </View>
      </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300
    }
  });
  

export default GameBoard