"use client"

import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react"
import Link from "next/link"
import {
    ChevronDown,
    CircleUser,
    Home,
    Lightbulb,
    Menu,
    NotepadText,
    Package,
    Package2,
    ShoppingCart,
    SquareUserRound,
    User,
    User2,
    UserPen,
    Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type SeccionesKeys = "inicio" | "informacion-personal" | "convocatorias" | "proyectos" | "usuarios";


const itemsMenu: Record<SeccionesKeys, any> = {
    "inicio": {
        title: "Inicio",
        icon: <Home className="h-4 w-4" />,
    },
    "informacion-personal": {
        title: "Informacion personal",
        icon: <User2 className="h-4 w-4" />
    },
    "convocatorias": {
        title: "Convocatorias",
        icon: <NotepadText className="h-4 w-4" />
    },
    "proyectos": {
        title: "Proyectos",
        icon: <Lightbulb className="h-4 w-4" />
    },
    "usuarios": {
        title: "Usuarios",
        icon: <Users className="h-4 w-4" />,
        subitems: [
            {
                title: "Participantes",
                icon: <SquareUserRound className="h-4 w-4" />,
            },
            {
                title: "Evaluadores",
                icon: <UserPen className="h-4 w-4" />,
            }
        ]
    }
}


export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const [isUsuariosOpen, setIsUsuariosOpen] = useState(localStorage.getItem("isUsuariosOpen") ? JSON.parse(localStorage.getItem("isUsuariosOpen")!) : false)
    const [itemActive, setItemActive] = useState(localStorage.getItem("itemActive") ? JSON.parse(localStorage.getItem("itemActive")!) : "inicio")

    const pathname = usePathname();

    useEffect(() => {
        const getItemPage = (pathname: string) => {
            console.log(pathname);
            const keys = Object.keys(itemsMenu);
            if (keys.includes(pathname)) {
                setItemActive(pathname);
            }
        }
        localStorage.setItem("itemActive", JSON.stringify(itemActive));
        getItemPage(pathname);
    }, [pathname])

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden bg-base/90 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <User className="h-6 w-6 text-white" />
                            <span className="text-white">Administrador</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-base font-medium lg:px-4 py-3">
                            {itemsMenu && Object.keys(itemsMenu).map((item, index) => {
                                const sectionKey = item as SeccionesKeys;

                                if (itemsMenu[sectionKey].subitems) {
                                    return (
                                        <div key={index}>
                                            <div
                                                onClick={() => {
                                                    setIsUsuariosOpen((prevValue: boolean) => {
                                                        const newValue = !prevValue;
                                                        localStorage.setItem("isUsuariosOpen", JSON.stringify(newValue));
                                                        return newValue;
                                                    });

                                                }}
                                                className="flex justify-between items-center gap-3 rounded-lg px-3 py-2 font-bold text-white hover:bg-red-600 transition-all cursor-pointer"
                                            >
                                                <div className="flex gap-3 items-center">
                                                    {itemsMenu[sectionKey].icon}
                                                    {itemsMenu[sectionKey].title}
                                                </div>
                                                {isUsuariosOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronDown className="h-4 w-4 transform rotate-90" />}
                                            </div>

                                            {/* Subitems: Participantes y Evaluadores */}
                                            {isUsuariosOpen && (
                                                <div className="pl-4">
                                                    {itemsMenu[sectionKey].subitems.map((subitem: any, index: number) => (
                                                        <Link
                                                            key={`1-${index}`}
                                                            onClick={() => setItemActive(subitem.title)}
                                                            href={`/admin/usuarios/${subitem.title.toLowerCase()}`}
                                                            className={`${itemActive == subitem.title ? "bg-white text-red-700 hover:bg-white" : "text-white hover:bg-red-600"} flex items-center gap-3 rounded-lg px-3 py-2 font-bold transition-all`}
                                                        >
                                                            {subitem.icon}
                                                            {subitem.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )
                                }

                                return (<Link
                                    key={index}
                                    onClick={() => setItemActive(item)}
                                    href={`/admin/${item}`}
                                    className={`${itemActive == item ? "bg-white text-red-700 hover:bg-white" : "text-white hover:bg-red-600"} flex items-center gap-3 rounded-lg px-3 py-2 font-bold transition-all`}
                                >
                                    {itemsMenu[sectionKey].icon}
                                    {itemsMenu[sectionKey].title}
                                </Link>)
                            })}
                        </nav>
                    </div>

                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-base/90 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                {itemsMenu && Object.keys(itemsMenu).map((item, index) => {
                                    const sectionKey = item as SeccionesKeys;

                                    if (itemsMenu[sectionKey].subitems) {
                                        return (
                                            <div key={index}>
                                                <div
                                                    onClick={() => {
                                                        setIsUsuariosOpen((prevValue: boolean) => {
                                                            const newValue = !prevValue;
                                                            localStorage.setItem("isUsuariosOpen", JSON.stringify(newValue));
                                                            return newValue;
                                                        });

                                                    }}
                                                    className="flex justify-between items-center gap-3 rounded-lg px-3 py-2 font-bold text-white hover:bg-red-600 transition-all cursor-pointer"
                                                >
                                                    <div className="flex gap-3 items-center">
                                                        {itemsMenu[sectionKey].icon}
                                                        {itemsMenu[sectionKey].title}
                                                    </div>
                                                    {isUsuariosOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronDown className="h-4 w-4 transform rotate-90" />}
                                                </div>

                                                {/* Subitems: Participantes y Evaluadores */}
                                                {isUsuariosOpen && (
                                                    <div className="pl-4">
                                                        {itemsMenu[sectionKey].subitems.map((subitem: any, index: number) => (
                                                            <Link
                                                                key={`1-${index}`}
                                                                onClick={() => setItemActive(subitem.title)}
                                                                href={`/admin/usuarios/${subitem.title.toLowerCase()}`}
                                                                className={`${itemActive == subitem.title ? "bg-white text-red-700 hover:bg-white" : "text-white hover:bg-red-600"} flex items-center gap-3 rounded-lg px-3 py-2 font-bold transition-all`}
                                                            >
                                                                {subitem.icon}
                                                                {subitem.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    }

                                    return (<Link
                                        key={index}
                                        onClick={() => setItemActive(item)}
                                        href={`/admin/${item}`}
                                        className={`${itemActive == item ? "bg-white text-red-700 hover:bg-white" : "text-white hover:bg-red-600"} flex items-center gap-3 rounded-lg px-3 py-2 font-bold transition-all`}
                                    >
                                        {itemsMenu[sectionKey].icon}
                                        {itemsMenu[sectionKey].title}
                                    </Link>)
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1"></div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div >
    )
}