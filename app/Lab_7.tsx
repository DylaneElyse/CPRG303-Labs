import { Text, TextInput, View, StyleSheet, ScrollView, Pressable, Button, TouchableOpacity } from "react-native";
import { useState, useEffect } from 'react';
import { selectData, updateData, insertData } from "../lib/supabase_crud_lab7";

const Lab_7 = () => {
    // Database: import table
    const[dataFromTable, setDataFromTable] = useState<any>(false);

    // Database: columns from Lab7 table
    const[param1, setParam1] = useState<string>("");
    const[param2, setParam2] = useState<string>("");
    const[param3, setParam3] = useState<string>("");
    const[param4, setParam4] = useState<number>(0); // default value? **

    // Parameter edition
    const[toggleParam1, setToggleParam1] = useState<boolean>(false);
    const[toggleParam2, setToggleParam2] = useState<boolean>(false);
    const[toggleParam3, setToggleParam3] = useState<boolean>(false);
    const[toggleParam4, setToggleParam4] = useState<boolean>(false);

    const[selectedUid, setSelectedUid] = useState<string[]>([]);

    const[loading, setLoading] = useState(true);

    // fetch upon page rendering
    useEffect(() => {
        fetchData();
    }, [selectedUid]);
    
    const fetchData = async () => {
            try {
                    const data = await selectData ();
                    setDataFromTable(data);
                    console.log("Fetched data: ", data);
                } catch (error) {
                    console.error("Error fetching visitors data: ", error);
                } finally {
                    setLoading(false);
                }
        };

    if (loading){
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    // to be implemented
// const emptyParamCheck = (item: any) => {
    // if (item.uid.length === 0 ||
    //     item.param1.length === 0 ||
    //     item.param2.length === 0 ||
    //     item.param3.length === 0 ||
    //     item.param4.length === 0 // default number may impact it **
    // )
    //     return;
// }

const toggleSelectedUidToEdit = (uid: string) => {
    if (selectedUid.includes(uid)){
        // unselect
        setSelectedUid(selectedUid.filter((itemUid) => itemUid !== uid))
    }
    else{
        // select
        setSelectedUid([...selectedUid, uid]);
    }
}

const handleEdition = (uid: string) => {
    toggleSelectedUidToEdit(uid);
    resetItemSelection();
}

const resetItemSelection = () => {
    setToggleParam1(false);
    setToggleParam2(false);
    setToggleParam3(false);
    setToggleParam4(false);
    // in case we decide to have an expansion for each...
    setParam1("");
    setParam2("");
    setParam3("");
    setParam4(0); // default number? **
}

const handleUpdateParam1 = async (uid: string, item: any) => {
    // the commented code below does not refresh/rerender
    // the page if inside an if statement

    // if (item.uid.length === 0 ||
    // item.param2.length === 0 ||
    // item.param3.length === 0 ||
    // item.param4.length === 0 ||
    // item.param5.length === 0) // default number may impact it **
    // return;
    // try{
    //     updateData(uid, item);
    //     resetItemSelection();
    //     toggleSelectedUidToEdit(uid);
    //     fetchData;
    // } catch (error) {
    //     console.error("Error updating user param1: ", error)
    // }
    
        updateData(uid, item);
        resetItemSelection();
        toggleSelectedUidToEdit(uid);
        fetchData;
}

return (
    <ScrollView>
    <View>
        <Text style={styles.title}>Blob list:</Text>
        {dataFromTable && 
        dataFromTable.map((item: any, uid: number) => (
            <View style={styles.container} key={uid}>            
                <View style={[styles.item, selectedUid.includes(item.uid) && {backgroundColor: "#ff6363"}]}>
                    <Text><Text style={styles.textHeader}>ID:</Text> <Text>{item.uid}</Text></Text>
                    
                    // edition toggle for param1
                    <Pressable onPress={() => setToggleParam1(!toggleParam1)}>
                        <Text><Text style={styles.textHeader}>Param1: </Text><Text>{item.param1}</Text></Text>
                    </Pressable>
                        {selectedUid.includes(item.uid) && toggleParam1 === true && (
                        <View style={styles.paramEditionTextInput}>
                            <TextInput placeholder="Enter new param1 value" onChangeText={setParam1}></TextInput>
                        </View>
                        )}

                    <Text><Text style={styles.textHeader}>Param2: </Text><Text>{item.param2}</Text></Text>
                    <Text><Text style={styles.textHeader}>Param3: </Text><Text>{item.param3}</Text></Text>
                    <Text><Text style={styles.textHeader}>Param4: </Text><Text>{item.param4}</Text></Text>  

                    // item bottom buttons
                    <View style={{justifyContent: "center", alignItems: "flex-end"}}>
                        <TouchableOpacity style={styles.paramEditionButton} onPress={() => handleEdition(item.uid)}>
                            {selectedUid.includes(item.uid) ? 
                                <View style={{display: "flex", flexDirection: "row"}}>
                                    <Text style={{backgroundColor:"#ffffff", marginLeft: 10, fontWeight: "bold"}}>CANCEL</Text>
                                    <TouchableOpacity onPress={() => {handleUpdateParam1(item.uid, { // currently only set to a update the param1 **
                                            param1: param1,
                                            param2: item.param2,
                                            param3: item.param3,
                                            param4: item.param4,
                                        })}}>
                                        <Text style={{backgroundColor:"#00ff55", marginLeft: 10, fontWeight: "bold"}}>SUBMIT</Text>
                                    </TouchableOpacity>
                                </View> : 
                                <Text>EDIT</Text> 
                            }
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

    ))}
    </View>
    </ScrollView>
);
}

export default Lab_7;


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center",
    },
    container:{
        // display: "flex",
        alignItems: "center"
    },
     item:{
        marginTop: 20,
        backgroundColor: "#d9ece6",
        width: 300,
        alignItems: "flex-start"
    },   
    itemEditionMode:{
        marginTop: 20,
        backgroundColor: "#ff96a",
        width: 300,
        alignItems: "flex-start"
    },
    textHeader:{
        fontWeight: "bold"
    },
    paramEditionTextInput: {
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "grey"
    },
    paramEditionButton: {
        borderWidth: 1, 
        borderColor: "black", 
        padding: 1,
        alignSelf: "flex-end",
    }
})