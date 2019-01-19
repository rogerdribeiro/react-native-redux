import React from "react";

import { View, Text, Image } from "react-native";
import styles from "./styles";

const FavoriteItem = ({
  favorite: {
    item: { name, owner, description }
  }
}) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: owner.avatar_url }} />
    <View style={styles.info}>
      <Text style={styles.title}> {name}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
    </View>
  </View>
);
export default FavoriteItem;
