import {useRouter} from "expo-router";
import {View, Text, TextInput} from "react-native";
import { useState, useEffect } from "react";

const CallAPI = () => {

    const[reveal, setReveal] = useState(false);
    const[APIdata, setAPIdata] = useState<Array<any>>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (APIdata.length > 0){
            handleAPICall();
        }
   }, [reveal]);
 
// useEffect is a hook from React to allow you to run a code whenever the component is loaded/mounted/called
// we can have the component in a conditional rendering, but it will only have whatever inside the useEffect
// when it is actually rendered.

// dependency array []: whenever the value changes, it will run the code that is inside the useEffect function.
// it can also listen to when a change in the code is made through the []
   
    const handleAPICall = async () => {
        try{
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/1`,
                {
                   method: "GET",
                }
            )

        if (!response.ok){
            throw new Error("Fail")
            }

        const APIDataDigested = await response.json();
        setAPIdata(APIDataDigested);
        console.log(APIDataDigested);
        }

        catch(error){
            setError(error);
            console.log("Error calling the API");
        } finally {
            setReveal(false);
        }
    }
}

    const toggleAPICall = () => {
        if (reveal){
            setReveal(reveal = false);
        }
        else {
            setReveal(reveal = true);
        }
    }

return (
    <View>
        <Button title="Call API" onPress={toggleAPICall}></Button>
        {data &&
        data.length > 0 &&
        data.map((obj) => (
            <View>
                <Text>User ID: {obj.userId}</Text>
                <Text>ID: {obj.id}</Text>
                <Text>Title: {obj.title}</Text>
                <Text>Body: {obj.body}</Text>
            </View>
        )
        )}
    </View>
)