import { Button, View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import DestionationsList from "./constants/list_destionations";
import { useState } from "react";

type Flight = {
      id: number,
      location: string,
      price: number,
      selected: boolean;
      average_yearly_temperature: string,
}

export default function Lab4(){
    const [destinations, setDestinations] = useState<Flight[]>(
        DestionationsList.map((item => ({...item, selected: false}))));
        // initialize destination array by spreading its items and adding a isSelected
        // property to each object set false by default. It will not impact the objects
        // within the file from which they were imported.

    const selectItem = (index: number) => {
        setDestinations(destinations => destinations.map((item, i) => i === index ? {...item, selected: true} : item));
    };

    const unselectItem = (index: number) => {
        setDestinations(destinations => destinations.map((item, i) => i === index ? {...item, selected: false} : item));
    };

    const FlightItem = ({id, location, average_yearly_temperature, price}: Flight) => (
        <View>
            <Text style={styles.textSelectionOfFlights}>
                Flight #{id} to {location} ({average_yearly_temperature}) for CA${price}.
            </Text>
        </View>
    );

    const SelectButton = ({index}:{index: number}) => {
        return(
            <TouchableOpacity onPress={() => selectItem(index)}>
                <Text style={{fontSize: 15}}>{" \u2610"}</Text>
            </TouchableOpacity>
        )
    };
    const UnselectButton = ({index}:{index: number}) => {
        return(
            <TouchableOpacity onPress={() => unselectItem(index)}>
                <Text>{"\u2705"}</Text>
            </TouchableOpacity> 
        )
    };

    return (
        <View>
            <FlatList
                data={destinations}
                renderItem={({item, index}) => (
                <View style={styles.rowFlight}>
                <View style={styles.listOfFlights} >
                    <FlightItem
                    // To know what are the properties from the 'destinations' list, it has to be declared
                    // explicitly with type Flight being announced as the items that will compose the list of <Flight>
                    id = {item.id}
                    location = {item.location}
                    price = {item.price}
                    average_yearly_temperature={item.average_yearly_temperature}
                    selected={item.selected}/>
                        {item.selected ? <UnselectButton index={index}/> : <SelectButton index={index}/>} 
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