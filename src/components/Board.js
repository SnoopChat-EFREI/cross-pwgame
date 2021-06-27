import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SocketContext from "../utils/socket.context";

import style from "../../assets/styles/Home";

import MagicNumber from "../games/MagicNumber";

export default function Board() {
  const [loader, setLoader] = useState(true);
  const [room, setRoom] = useState(null);

  const { socket } = useContext(SocketContext);
  const navigation = useNavigation();

  useEffect(() => {
    socket.emit("join-room");
  }, []);

  socket.on("found", (data) => {
    setRoom(data);
    setLoader(false);
  });

  return (
    <View style={style.container}>
      {loader ? (
        <View>
          <Text>En attente d'autre joueur</Text>
          <ActivityIndicator size="large" color="#00a8ff" />
        </View>
      ) : (
        <View>
          <Text> Partie trouvé ! : {room} </Text>
          <MagicNumber room={room} />
        </View>
      )}
    </View>
  );
}
