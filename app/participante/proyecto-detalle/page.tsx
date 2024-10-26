"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, ListFilter, MinusCircle, PlusCircle } from "lucide-react";
import { DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Participante } from "@/app/common/interfaces";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const participantes: Participante[] = [
    {
        dni: "1928456271",
        nombre: "Juan Perez",
        codigo: "1142563",
        semestre: 8,
        correo: "juan@ufps.edu.co",
        telefono: "3224561789"
    },
    {
        dni: "1928456271",
        nombre: "Maria Gutierrez",
        codigo: "1142563",
        semestre: 9,
        correo: "mariagu@ufps.edu.co",
        telefono: "3224561789"
    },
]

const styleEditButton = (modify: boolean) => {
    const color = modify ? "green" : "blue";
    return `bg-${color}-600 hover:bg-${color}-500`;
}

const formatearMoneda = (valor: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP' }).format(valor);
};

export default function ProyectoDetailPage() {

    const [modify, setModify] = useState(false);

    return (
        <Card>
            <CardHeader className="flex justify-between flex-row">
                <div>
                    <CardTitle className="text-2xl">Detalle del proyecto de aula</CardTitle>
                    <Badge className="bg-gray-500">Esperando aprobación</Badge>
                </div>
                <Button onClick={(e) => setModify(!modify)} className={styleEditButton(modify)}><Edit className="mr-2 w-4" />{modify ? "Guardar" : "Editar información"}</Button>
            </CardHeader>
            <CardContent className="mt-5">
                <form>
                    <div className="grid gap-2">
                        <Label className="font-">Nombre del curso</Label>
                        <Input type="text" className="disabled:font-bold" value="Análisis y diseño de sistemas" disabled={!modify} />
                    </div>
                    <div className="grid gap-2 mt-4">
                        <Label className="font-">Docente orientador</Label>
                        <Input type="text" className="disabled:font-bold" value="Manuel Narvaez" disabled={!modify} />
                    </div>
                    <div className="flex gap-3 justify-between items-center mt-6">
                        <div className="w-1/3 grid gap-2">
                            <Label htmlFor="meses" className="font-bold text-base text-black">Tiempo para ejecutarlo (meses)</Label>
                            <Input type="number" className="py-5 disabled:font-bold" id="meses" value="18" disabled={!modify} />
                        </div>
                        <div className="w-1/3 grid gap-2">
                            <Label htmlFor="estado" className="font-bold text-base text-black">Estado actual del proyecto</Label>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="py-5 disabled:font-bold" disabled={!modify} asChild>
                                    <Button variant="outline" size="lg" className="h-8 gap-1">
                                        <ListFilter className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                            Formulación
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-72">
                                    <DropdownMenuLabel>estados</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem checked>
                                        Formulación
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>Ejecución</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Terminado
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="w-1/3 grid gap-2">
                            <Label htmlFor="estado" className="font-bold text-base text-black">Tipo de proyecto</Label>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="py-5 disabled:font-bold" disabled={!modify} asChild>
                                    <Button variant="outline" size="lg" className="h-8 gap-1">
                                        <ListFilter className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                            Aprendizaje de Aula
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-64">
                                    <DropdownMenuLabel>Tipos de proyectos</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem checked>
                                        Innovación
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>Emprendimiento</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Aprendizaje de Aula
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Integrador
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <Card className="grid gap-2 mt-8 p-4">

                        <CardTitle className="flex justify-between">
                            <Label className="font-bold text-base text-black">Estudiantes</Label>
                            <Button disabled={!modify} size="sm" variant="default" className="gap-1 bg-green-600 hover:bg-green-500 font-bold">
                                <PlusCircle className="h-3.5 w-3.5" />
                                Agregar estudiante
                            </Button>
                        </CardTitle>

                        <div className="grid gap-2">

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nombre</TableHead>
                                        <TableHead>Número de identificación</TableHead>
                                        <TableHead>Código</TableHead>
                                        <TableHead>Semestre Actual</TableHead>
                                        <TableHead>Correo</TableHead>
                                        <TableHead>Teléfono</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {participantes.map((participante) => (
                                        <TableRow key={participante.dni}>
                                            <TableCell>
                                                {participante.nombre}
                                            </TableCell>
                                            <TableCell>
                                                {participante.dni}
                                            </TableCell>
                                            <TableCell>
                                                {participante.codigo}
                                            </TableCell>
                                            <TableCell>
                                                {participante.semestre}
                                            </TableCell>
                                            <TableCell>
                                                {participante.correo}
                                            </TableCell>
                                            <TableCell>
                                                {participante.telefono}
                                            </TableCell>
                                            <TableCell>
                                                <Button disabled={!modify} size="sm" className="gap-1 bg-red-600  hover:bg-red-400">
                                                    <MinusCircle className="h-3.5 w-3.5" /> Retirar
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Card>
                    <Card className="mt-8">
                        <CardHeader>
                            <CardTitle>Información del proyecto</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <Label className="font-">Título del proyecto</Label>
                                <Input type="text" className="disabled:font-bold" value="Ejemplo título del proyecto" disabled={!modify} />
                            </div>

                            <div className="grid gap-2 mt-4">
                                <Label className="font-">Objetivo General</Label>
                                <Textarea className="disabled:font-bold" value="Construir herramienta de desarrollo" disabled={!modify} />
                            </div>

                            <div className="grid gap-2 mt-4">
                                <Label className="font-">Objetivo Específicos</Label>
                                <Textarea className="disabled:font-bold" value="Objetivos específicos, máximo 3" disabled={!modify} />
                            </div>

                            <div className="grid gap-2 mt-4">
                                <Label className="font-">Alcance del proyecto</Label>
                                <Textarea className="disabled:font-bold" value="Alcance del proyecto, máxmimo 500 palabras" disabled={!modify} />
                            </div>

                            <div className="grid gap-2 mt-4">
                                <Label className="font-">Estado del arte</Label>
                                <Textarea className="disabled:font-bold" value="Estado del arte, máxmimo 500 palabras" disabled={!modify} />
                            </div>

                            <div className="grid gap-2 mt-4">
                                <Label className="font-">Resultados del proyecto</Label>
                                <Textarea className="disabled:font-bold" value="Resultados esperados y/o obtenidos" disabled={!modify} />
                            </div>

                            <div className="grid gap-2 mt-4">
                                <Label className="font-">Presupuesto del proyecto</Label>
                                <Input type="text" className="disabled:font-bold" value={`$${formatearMoneda(5000000)}`} disabled={!modify} />
                            </div>

                            <div className="grid gap-2 mt-4">
                                <Label className="font-">Fuentes de financiación</Label>
                                <Textarea className="disabled:font-bold" value="Fuentes de financiación del proyecto (universidad, propios u otros)" disabled={!modify} />
                            </div>

                            <Card className="mt-5">
                                <CardHeader>
                                    <CardTitle>Observaciones del docente</CardTitle>
                                    <CardDescription>Observaciones y/o visto bueno dejado por el docente</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Textarea className="disabled:font-bold" value="Observaciones del docente" />
                                    <div className="flex flex-row justify-between mt-3">
                                        <div className="flex gap-3 justify-between items-center">
                                            <Label className="font-bold">Visto bueno</Label>
                                            <Badge className="bg-green-500">Aprobado</Badge>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-3">
                                            <Label className="font-bold">Fecha de aprobación</Label>
                                            <Input type="text" className="disabled:font-bold" value="24/06/2024" disabled={!modify} />
                                        </div>

                                        <div className="flex flex-row justify-between items-center mt-3">
                                            <Label className="font-bold">Firma del docente</Label>
                                            <div>
                                                <Image alt="Firma del docente" src="/images/firma-fake.png" width={180} height={80} className="mx-auto" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </form>
            </CardContent>
        </Card>
    );
}