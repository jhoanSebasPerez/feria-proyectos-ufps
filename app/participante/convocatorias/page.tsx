import { Convocatoria } from "@/app/common/interfaces";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

export default function ConvocatoriasPage() {

    const convocatorias: Convocatoria[] = [
        {
            id: 1,
            titulo: "Convocatoria 1",
            descripcion: "Descripcion de la convocatoria 1",
            fechaFin: new Date(),
            fechaInicio: new Date(),
            isActive: false,
            imagen: "/images/img-convocatoria1.webp",
            tipo: "semillero"
        },
        {
            id: 2,
            titulo: "Convocatoria 2",
            descripcion: "Descripcion de la convocatoria 2",
            fechaFin: new Date(),
            fechaInicio: new Date(),
            isActive: true,
            imagen: "/images/img-convocatoria2.webp",
            tipo: "aula"
        },
    ];

    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <div>
                    <CardTitle className="text-2xl">Convocatorias Inscritas</CardTitle>
                    <CardDescription>Las siguientes son las convocatorias en las que te encuentras inscrito</CardDescription>
                </div>
                <div>
                    <Link href="/participante/convocatoria-detail">
                        <Button className="bg-green-700 hover:bg-green-600 py-5">Inscribirse en una convocatoria</Button>

                    </Link>
                </div>
            </CardHeader>
            <CardContent>

                <div className="flex">
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
                                        <p>Tipo de convocatoria: <Badge className={convocatoria.tipo == "aula" ? "bg-blue-600" : "bg-gray-500"}>{convocatoria.tipo}</Badge></p>
                                        <span>Estado: <Badge variant={convocatoria.isActive ? "success" : "destructive"}>{convocatoria.isActive ? "Activa" : "Terminada"}</Badge></span>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/participante/convocatoria-detalle" className="w-full">
                                        <button className="w-full bg-base hover:bg-red-600 text-primary-foreground py-2 rounded-lg">
                                            Ver más
                                        </button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    )
}