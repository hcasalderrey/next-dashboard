import { SimpleWidget } from "@/components";
import { WidgetsGrid } from '../../../components/dashboard/WidgetsGrid';


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard page description',
};

export default function MainPage() {
  return (
    <div className="p-2 text-black">
         
            <h1 className="mt-2 text-3xl">Hello Main Page</h1>
            <span className="text-xl">Información general</span>

            <WidgetsGrid />
         
    </div> 
  );
}