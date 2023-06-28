import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
export function ScreenB() {
  return (
    <View style={styles.container}>
        <Button
            title="Voltar pra A"
            color="#fff"
        />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
    }
})