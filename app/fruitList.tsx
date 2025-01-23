import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from 'expo-router';
import { IndexButton } from "../components/buttonTemplate";

const ListPage = () => {
    return(
        <View>
            <Text>Check on some fruits:</Text>
            <Link href="/fruits/apple">Apple</Link>
            <Link href="/fruits/pear">Pear</Link>
            <Link href="/fruits/mango">Mango</Link>
            <IndexButton/>
        </View>
    )
}

export default ListPage;