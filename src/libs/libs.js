import { supabase } from "@/supabase/supabase";

export const uploadFile = async (file) => {
  const { data, error } = await supabase.storage
    .from("storage_images")
    .upload(`images/${file.name}`, file);

  if (error) throw new Error("Error al recuperar la imagen");
  return data;
};

export const deleteImage = async (name) => {
  const { error } = await supabase.storage
    .from("storage_images")
    .remove([name]);
  if (error) throw new Error("Error al eliminar la imagen");
};

export const getTasks = async () => {
  const { data, error } = await supabase.from("tasksDB").select("*");
  if (error) throw new Error("Error al recuperar los datos");
  return data;
};

export const getUniqueTask = async (id) => {
  const { data, error } = await supabase
    .from("tasksDB")
    .select("*")
    .eq("id", id);
  if (error) throw new Error("Error al recuperar el dato");
  return data[0];
};

export const insertTask = async (task) => {
  const { error } = await supabase.from("tasksDB").insert([task]).select();
  if (error) throw new Error("Error al insertar el dato");
};

export const deleteTask = async (task) => {
  const { error } = await supabase.from("tasksDB").delete().eq("id", task.id);
  await deleteImage(task.image);
  if (error) throw new Error("Error al eliminar los datos");
};

export const updateTasks = async (task) => {
  const { error } = await supabase
    .from("tasksDB")
    .update(task)
    .eq("id", task.id);
  if (error) throw new Error("Error al actualizar el dato");
};
