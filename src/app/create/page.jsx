"use client";
import { useForm } from "@/hooks/useForm";
import "./create.css";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { getUniqueTask } from "@/libs/libs";

export default function Create() {
  
  const {id} = useParams();
  const { form, createTask, setForm, img, setImg, updateTask } =
    useForm();

  const changeTask = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitTask = (e) => {
    e.preventDefault();
    form.id ? updateTask(form) : createTask(form);
  };

  useEffect(() => {
    const getUpdateTask = async () => {
      if(id) {
        const data = await getUniqueTask(id);
        setForm(data); 
      }
    };
    getUpdateTask();
  }, []);

  return (
    <section className="section-create">
      <form className="form" onSubmit={submitTask}>
        <h1>Crear tarea nueva</h1>
        <div>
          <label>Escribe un título</label>
          <input
            type="text"
            placeholder="Create app react with supabase too..."
            name="title"
            value={form.title}
            onChange={changeTask}
            required
          />
        </div>
        <div>
          <label>Agrega la fecha</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={changeTask}
            required
          />
        </div>
        <div>
          <label>Escribe la tarea</label>
          <input
            type="text"
            name="content"
            value={form.content}
            onChange={changeTask}
            required
          />
        </div>
        <div>
          <label>Añade una imagen</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            filename={img}
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <button type="submit">{form.id ? "Actualizar" : "Crear"}</button>
      </form>
    </section>
  );
}
