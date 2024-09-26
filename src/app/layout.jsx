import { Header } from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Crud Fullstack",
  description: "Crud para tareas donde agregas tus notas, fechas e imagenes ilustrativas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
