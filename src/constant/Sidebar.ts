import {BiHome} from 'react-icons/bi'
import {AiOutlineCar} from 'react-icons/ai'
import {HiOutlineUsers} from 'react-icons/hi'
import {CiShoppingBasket} from 'react-icons/ci'
export const sidebarLink = [
    {
        id: "1",
        name: "Dashboard",
        icone: BiHome,
        path: "/dashboard"
    },
    {
        id: "2",
        name: "Clients",
        icone: HiOutlineUsers,
        path: "/client"
    },
    {
        id: "3",
        name: "Cars",
        icone: AiOutlineCar,
        path: "/cars"
    },
    {
        id: "4",
        name: "Orders",
        icone: CiShoppingBasket,
        path: "/ordes"
    },
]
