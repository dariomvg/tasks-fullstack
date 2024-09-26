"use client";
import { useForm } from "@/hooks/useForm";
import "./tasks.css";
import Link from "next/link";
import { Card } from "@/components/Card";

export default function Tasks() {
  const { tasks } = useForm();

  return (
    <section className="page-tasks">
      {tasks.length > 0 ? (
        <section className="section-tasks">
          {tasks.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </section>
      ) : (
        <div className="box-tasks">
          <p>No tienes tareas creadas</p>
          <Link href="/create" className="link-tasks">
            Crear tarea
          </Link>
        </div>
      )}
    </section>
  );
}
