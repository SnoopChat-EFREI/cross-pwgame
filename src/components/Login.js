import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import socketIO from "socket.io-client";

import style from "../../assets/styles/Login";

export default function Login({ setSocket }) {
  const [name, setName] = useState(null);
  const [errorN, setErrorN] = useState(false);

  const onLoad = (e) => {
    e.preventDefault();
    if (name) {
      console.log(name);
    } else {
      setErrorN(true);
      return;
    }
    try {
      const socket = socketIO("http://61f7830b8828.ngrok.io", {
        transports: ["polling"],
      });
      socket.emit("new_player", name);
      setSocket(socket);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.connectionContainer}>
      <Text style={style.title}>Bienvenue sur SNOOPGAME</Text>
      <TextInput
        style={errorN ? style.fail : style.input}
        placeholder="Entrez votre pseudo..."
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <View style={style.connectionButton}>
        <TouchableOpacity style={style.button} onPress={(e) => onLoad(e)}>
          <Text style={style.buttonText}>SE CONNECTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
