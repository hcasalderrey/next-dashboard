import Image from "next/image"
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline  } from "react-icons/io5"
import { SidebarMenuItem } from "./SidebarMenuItem"
import { IoIosBasket } from "react-icons/io"

const menuItems = [

    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={25} />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },

    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={25} />,
        title: 'Counter',
        subTitle: 'Contador cliente side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={25} />,
        title: 'Pokemon',
        subTitle: 'Generación estáticos'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={25} />,
        title: 'Favoritos',
        subTitle: 'Global state'
    },
 
]


export const Sidebar = () => {
  return (
    <div id="menu"
        style={{width: '400px'}}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 ">

           <div id="logo" className="my-4 px-6">
            <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                <IoIosBasket  className="mr-2" />
                <span>Mi {` `}</span> 
                <span className="text-blue-500">Catalogo</span>
            </h1>
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
           </div>
           <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image className="rounded-full w-8 h-8"                    
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
                    width={50}
                    height={50}
                    alt="User Avatar" />
                </span>
                <span className="text-sm md:text-base font-bold">
                    Hernan Casalderrey
                </span>
                </a>
           </div>


           <div id="nav" className="w-full px-6">

            {
                menuItems.map(item =>(
                    <SidebarMenuItem key={item.path} {...item} />
                ))
            }
  

           
            
           </div>
        </div>
  )
}
