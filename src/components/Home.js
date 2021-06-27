import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import style from "../../assets/styles/Home";
import SocketContext from "../utils/socket.context";

export default function Home() {
  const [users, setUsers] = useState({});
  /*   const [socket, setSocket] = useState(null);
   */
  const { socket } = useContext(SocketContext);
  const navigation = useNavigation();
  socket.on("connected", (data) => {
    setUsers(data);
  });

  const onPlay = () => {
    navigation.navigate("Board");
  };

  useEffect(() => {
    console.log("USERS : ", users);
  }, []);

  return (
    <View style={style.container}>
      <View style={users.length > 0 ? style.page : style.box}>
        <ScrollView>
          {users.length > 0 ? (
            users.map((user, index) => (
              <View key={index} style={style.table}>
                <Text style={style.list}>#{index + 1}</Text>
                <Text style={style.list}>{user.name}</Text>
                <Text style={style.list}>{user.id}</Text>
              </View>
            ))
          ) : (
            <View>
              <Text>En attente d'autre joueurs</Text>
              <ActivityIndicator size="large" color="#00a8ff" />
            </View>
          )}
        </ScrollView>
        <View style={style.boxBtn}>
          <TouchableOpacity
            style={style.btn}
            onPress={(e) => {
              onPlay();
            }}
          >
            <Text style={style.btnText}>JOUER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
