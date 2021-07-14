import React, { useState, useRef, useEffect } from "react";
import { ScrollView, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
const axios = require("axios");

const ListView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  async function getData() {
    let response = await axios("https://jsonplaceholder.typicode.com/photos");
    let user = await response.data;
    setData(user);
  }

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <Avatar source={{ uri: item.thumbnailUrl }} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </ScrollView>
  );
};

export default ListView;
