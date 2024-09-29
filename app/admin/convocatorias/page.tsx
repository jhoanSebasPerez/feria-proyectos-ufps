import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListFilter, PlusCircle } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface Convocatoria {
    id: number;
    titulo: string;
    descripcion: string;
    fechaFin: Date;
    fechaInicio: Date;
    isActive: boolean;
    imagen?: string;
}


export default function AdminConvocatorias() {

    const convocatorias: Convocatoria[] = [
        {
            id: 1,
            titulo: "Convocatoria 1",
            descripcion: "Descripcion de la convocatoria 1",
            fechaFin: new Date(),
            fechaInicio: new Date(),
            isActive: false,
            imagen: "/images/img-convocatoria1.webp"
        },
        {
            id: 2,
            titulo: "Convocatoria 2",
            descripcion: "Descripcion de la convocatoria 2",
            fechaFin: new Date(),
            fechaInicio: new Date(),
            isActive: true,
            imagen: "/images/img-convocatoria2.webp"
        },
        {
            id: 3,
            titulo: "Convocatoria 3",
            descripcion: "Descripcion de la convocatoria 3",
            fechaFin: new Date(),
            fechaInicio: new Date(),
            isActive: true,
            imagen: "/images/img-convocatoria3.webp"
        },
    ];

    return (
        <>
            <div className="flex">
                <h1 className="text-lg font-semibold md:text-3xl">Convocatorias</h1>
            </div>
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">Todas</TabsTrigger>
                        <TabsTrigger value="active">Activas</TabsTrigger>
                        <TabsTrigger value="draft">Terminadas</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="lg" className="h-8 gap-1">
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Filtrar por
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                    Active
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Archived
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href="/admin/crear-convocatoria">
                            <Button size="lg" className="h-8 gap-1 bg-green-600">
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Crear convocatoria
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </Tabs>
            <div
                className="flex" x-chunk="dashboard-02-chunk-1"
            >
                {
                    convocatorias.map((convocatoria) => (
                        <Card key={convocatoria.id} className="w-[320px] mx-auto">
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">{convocatoria.titulo}</CardTitle>
                                <CardDescription>{convocatoria.descripcion}</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center mt-2">
                                <Image alt={convocatoria.titulo} src={convocatoria.imagen!} width={150} height={150} className="mx-auto" />
                                <div className="mt-4">
                                    <p>Fecha de inicio: {convocatoria.fechaInicio.toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })}</p>
                                    <p>Fecha de fin: {convocatoria.fechaFin.toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })}</p>
                                    <span>Estado: <Badge variant={convocatoria.isActive ? "success" : "destructive"}>{convocatoria.isActive ? "Activa" : "Terminada"}</Badge></span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link href="/admin/convocatoria-detail" className="w-full">
                                    <button className="w-full bg-base hover:bg-red-600 text-primary-foreground py-2 rounded-lg">
                                        Ver más
                                    </button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </>

    );
}