"use client";
import { createNewTask } from "@/helpers/helper";
import {
  deleteImage,
  deleteTask,
  getTasks,
  insertTask,
  updateTasks,
} from "@/libs/libs";
import { base } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState(base);
  const [tasks, setTasks] = useState([]);
  const [img, setImg] = useState({});
  const router = useRouter();

  const createTask = async (task) => {
    let newTask;

    if (img.name) {
      newTask = await createNewTask(task, img);
    } else {
      newTask = { ...task };
    }
    await insertTask(newTask);
    setForm(base);
    router.push("/tasks");
  };

  const updateTask = async (task) => {
    let newTask;
    if (img.name) {
      await deleteImage(task.image);
      newTask = await createNewTask(task, img);
    } else {
      newTask = { ...task };
    }
    await updateTasks(newTask);
    setForm(base);
    router.push("/tasks");
  };

  const removeTask = async (task) => {
    await deleteTask(task);
  };

  useEffect(() => {
    const selectTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    selectTasks();
  }, [tasks]);

  return {
    createTask,
    form,
    setForm,
    img,
    setImg,
    tasks,
    updateTask,
    removeTask,
  };
};
