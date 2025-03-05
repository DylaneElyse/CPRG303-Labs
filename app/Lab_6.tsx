import { Text, View } from "react-native";
import { useState, useEffect } from 'react';
import { getVisitors } from "../lib/supabase_crud";

const Lab_6 = () => {
    // Supabase CRUD
    const[visitors, setVisitors] = useState<any>(false);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                    const data = await getVisitors();
                    setVisitors(data);
                    console.log("Fetched data: ", data);
                } catch (error) {
                    console.error("Error fetching visitors data: ", error);
                } finally {
                    setLoading(false);
                }
        };

        fetchData();
    }, []);

    if (loading){
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

return (
    <View>
        <Text>Visitors list:</Text>
        {visitors && 
        visitors.map((visitor: any, index: number) => (
        <View key={index}>
            <Text>ID: {visitor.id}</Text>
            <Text>Name: {visitor.visitor_name}</Text>
        </View>
    ))}
    </View>
);
}

export default Lab_6;