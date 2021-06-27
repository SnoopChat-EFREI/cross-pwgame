import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SocketContext from "../utils/socket.context";
import axios from "axios";

import style from "../../assets/styles/Home";

export default function MagicNumber({ room }) {
  const [number, setNumber] = useState(null);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    axios.get("http://localhost:8080/magic_number/" + room);
  }, []);

  socket.on("magic_number", (data) => {
    setNumber(data);
  });

  return (
    <View style={style.container}>
      <Text style={style.title}>MagicNumber</Text>
      <View>
        <Text>Trouvez le nombre le plus vite possible !</Text>
        <TextInput
          placeholder="Trouvez le nombre..."
          onChangeText={(value) => {
            setName(value);
          }}
        />
      </View>
    </View>
  );
}
