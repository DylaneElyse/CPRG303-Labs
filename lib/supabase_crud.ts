import supabase from "./supabase";

const TABLE_NAME = "visitors";

export async function getVisitors() {
    let{data, error} = await supabase.from(TABLE_NAME).select("*");
    if (error){
        throw error;
    }
    return data;
}