import supabase from "./supabase_lab7";

const TABLE_NAME = "lab7_table";

export async function selectData() {
    let{data, error} = await supabase.from(TABLE_NAME).select("*");
    if (error){
        throw error;
    }
    return data;
}

// Redefine parameters
export async function insertData (item: {param1: any, param2: any, param3: any, param4: number}) {
    let { data, error } = await supabase.from(TABLE_NAME).insert((item));
    if (error){
        throw new Error(error.message);
    }
    return data;
}

// Redefine unique identifier (uid) and parameters
export async function updateData (
    uid: string,
    item: {param1: any, param2: any, param3: any, param4: number}) {
    let { data, error } = await supabase.from(TABLE_NAME).update((item)).match({uid});
    if (error){
        throw new Error(error.message);
    }
    return data;
}