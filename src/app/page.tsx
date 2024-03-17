import { redirect } from "next/navigation";
import Image from "next/image";

export default function HomePage() {

    redirect('/dashboard/main');
  return (
    <div className="p-2 bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
    <div className="flex ">
         <h1 className="text-3xl">Hello Main Page</h1>
         </div>
    </div> 
  );
}
