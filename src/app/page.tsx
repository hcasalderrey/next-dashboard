import { redirect } from "next/navigation";
import Image from "next/image";

export default function HomePage() {

    redirect('/dashboard/main');
  return (
    <>
    <h1>Hola Mundo</h1>
    </>
  );
}
