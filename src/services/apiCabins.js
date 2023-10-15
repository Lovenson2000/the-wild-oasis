import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {


    let { data, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.log(error);
        throw new Error("Cabins could not be loaded");
    }
    return data;
}

export async function createEditCabin(newCabin, id) {
    console.log(newCabin, id);

    const hasImagepath = newCabin.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    const imagePath = hasImagepath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // 1. Create and Edit cabin 
    let query = supabase.from("cabins");

    //CREATE CABIN
    if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

    //EDIT CABIN
    if(id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Cabin could not be created");
     }
    

    
    // 2. Upload image to supabase

    if(hasImagepath) return data;
    
    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image);

    // 3. Delete cabin if there was an errorn uploading image
    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id);
    }
}

export async function deleteCabin(id) {

    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.log(error);
        throw new Error("Cabin could not be deleted");
    }
    return data;
}