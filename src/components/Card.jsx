"use client"; 
import "../styles/card.css";
import { url_image } from "@/utils/utils";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";

export const Card = ({ item }) => {
  const { id, title, image, date, content } = item;
  const {removeTask} = useForm();

  return (
    <div className="card">
      {image ? (
        <img
          src={`${url_image}${image}`}
          alt="description of task"
          width="100%"
          height={320}
          className="img-card"
        />
      ) : null}
      <div className="box-card">
        <strong>{date}</strong>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
          <Link href={`/edit/${id}`} className="b-update">
            Actualizar
          </Link>
          <button onClick={() => removeTask(item)} className="b-delete">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
