import { Button, View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import DestionationsList from "./constants/list_destionations";
import { useState } from "react";

type Flight = {
      id: number,
      location: string,
      price: number,
      average_yearly_temperature: string,
}

export default function Lab4(){
    const [destinations, setDestinations] = useState<Flight[]>(DestionationsList);
    const [selectedDestinations, setSelectedDestinations]  = useState<Flight[]>([]);

    const selectItem = (index: number) => {
        const selectedItem = destinations[index];
        // grabing the item from destination list by its index position
        setSelectedDestinations([selectedItem, ...selectedDestinations]);
        // To add an item to an array in React state without mutating it, we update the state by spreading the
        // existing selectedDestinations and adding the selectedItem.
        setDestinations(destinations.filter((item, i) => i !== index));
        // Then we remove the selected item from that list.
    };

    const unselectItem = (index: number) => {
        const unselectedItem = selectedDestinations[index];
        setDestinations([...destinations, unselectedItem]);
        setSelectedDestinations(selectedDestinations.filter((item, i) => i !== index));
    };

    // const selectItem = (index: number) => {
    //     destinations.map((item, i) => setSelectedDestinations(selectedDestinations.concat(item)));
    // // .map() returns a new array, not an item
    //     setDestinations(destinations.filter((item, i) => i === index));
    // }
    // const unselectItem = (index: number) => {
    //     destinations.map((item, i) => setDestinations(destinations.concat(item)));
    //     setDestinations(selectedDestinations.filter((item, i) => i === index));
    // }


    const Flight = ({id, location, average_yearly_temperature, price}:Flight) => (
        <View>
            <Text style={styles.textSelectionOfFlights}>
                Flight #{id} to {location} ({average_yearly_temperature}) for CA${price}.
            </Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={destinations}
                renderItem={({item, index}) => (
                <View style={styles.rowFlight}>
                <View style={styles.listOfFlights} >
                    <Flight
                    // To know what are the properties from the 'destinations' list, it has to be declared
                    // explicitly with type Flight being announced as the items that will compose the list of <Flight>
                    id = {item.id}
                    location = {item.location}
                    price = {item.price}
                    average_yearly_temperature={item.average_yearly_temperature}/>
                    <TouchableOpacity onPress={() => selectItem(index)}>
                        <Text style={{fontSize: 15}}>{" \u2610"}</Text>
                    </TouchableOpacity> 
                </View>
                </View>
                )}
            />
            <FlatList
                data={selectedDestinations}
                renderItem={({item, index}) => (
                    <View style={styles.rowFlight}>
                    <View style={styles.listOfFlights} >
                        <Flight
                        id = {item.id}
                        location = {item.location}
                        price = {item.price}
                        average_yearly_temperature={item.average_yearly_temperature}/>
                        <TouchableOpacity onPress={() => unselectItem(index)}>
                            <Text>{"\u2705"}</Text>
                        </TouchableOpacity> 
                    </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    listOfFlights: {
        flex: 1,
        flexDirection: "row",
        gap: 45,
        fontSize: 10,
        alignItems: "flex-start",
        marginBottom: 3,
    },
    textSelectionOfFlights: {
        fontSize: 15,
        width: 330
    },
    rowFlight: {
        marginTop: 20
    }
})