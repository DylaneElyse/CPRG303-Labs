import supabase from "./supabase_lab6";

const TABLE_NAME = "lab7_table";

export async function selectData () {
    let{data, error} = await supabase.from(TABLE_NAME).select("*");
    if (error){
        throw error;
    }
    return data;
}