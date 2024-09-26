import { uploadFile } from "@/libs/libs";

export const createNewTask = async (task, img) => {
  const newImage = await uploadFile(img);
  const newTask = { ...task, image: newImage.path };
  return newTask;
};
