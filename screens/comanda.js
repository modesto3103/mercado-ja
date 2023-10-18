import { StyleSheet, Text, View } from "react-native";
import Input from "../components/input";
import Button from "../components/button";

export default function Comanda({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text>olá</Text>
                <Text>Pedro modesto</Text>
            </View>

            <View>
                <Input/>
                <Button onPress={()=>navigation.navigate("Produtos")}>confirmar</Button>
            </View>

            <Text>
                Digite o código do seu carrinho para começar a comprar
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
})