import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import Increment from "../components/increment";
import Decrement from "../components/decrement";
import { IndexButton } from "../components/buttonTemplate";
import vacationDestinations, { VacationDestination } from "../constants/list_items";
import clickableButton from "../components/clickableButton";

export default function Lab_4() {
    const [Destination] = useState<VacationDestination[]>(vacationDestinations);
    type ItemProps = {
        id: number;
        location: string;
        price: number;
        average_yearly_temperature: string;
    };
    const renderItem = ({ item }: { item: ItemProps }) => (
        <Text style={styles.counterText}>
                            {clickableButton()}
{item.location} - {item.price} - {item.average_yearly_temperature}
        </Text>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Lab 4</Text>
            <Text style={styles.counterText}>Vacation Destinations</Text>
            {/* <FlatList data={Destination} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} /> */}
            <FlatList data={Destination} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />

            {/* <View style={styles.buttons}>
                {Destination.map((destination) => (
                    <Text style={styles.counterText}>
                        {destination.location} - {destination.price} - {destination.average_yearly_temperature}
                    </Text>
                ))}
            </View> */}
            <IndexButton />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    counterText: {
        fontSize: 20,
        margin: 10,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
});