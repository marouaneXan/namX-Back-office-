import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import TimeToLeaveRoundedIcon from '@mui/icons-material/TimeToLeaveRounded';
import TaskRoundedIcon from '@mui/icons-material/TaskRounded';

export const sidebarLink = [
    {
        id: "1",
        name: "Dashboard",
        icone: DashboardCustomizeRoundedIcon,
        path: "/dashboard"
    },
    {
        id: "2",
        name: "Clients",
        icone: PeopleAltRoundedIcon,
        path: "/client"
    },
    {
        id: "3",
        name: "Cars",
        icone: TimeToLeaveRoundedIcon,
        path: "/cars"
    },
    {
        id: "4",
        name: "Orders",
        icone: TaskRoundedIcon,
        path: "/ordes"
    },
]
