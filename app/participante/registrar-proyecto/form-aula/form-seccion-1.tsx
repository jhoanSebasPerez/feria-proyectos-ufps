"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Info, ListFilter, MinusCircle, Plus, PlusCircle } from "lucide-react";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SearchableSelector from "@/components/ui/searchable-selector";
import { Docente } from "@/app/common/interfaces";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import FormDocenteDialog from "@/components/ui/form-registro-dialog";
import { Toaster } from "@/components/ui/toaster";

const docentes: Docente[] = [
    { codigo: "168400", nombre: "John Zuluaga" },
    { codigo: "378530", nombre: "Maria Gutierrez" },
    { codigo: "390390", nombre: "Juan Perez" },
    { codigo: "432423", nombre: "Carlos Perez" }
]

export const FormSection1 = () => {

    const [date, setDate] = useState<Date>()
    const [openFormDocenteDialog, setOpenFormDocenteDialog] = useState(false)

    return (
        <>
            <form>
                <div className="grid gap-2">
                    <Label htmlFor="curso" className="font-bold text-base text-black">Nombre del curso (grupo)</Label>
                    <Input id="curso" placeholder="Nombre del curso" />
                </div>
                <div className="grid gap-2 mt-6">
                    <Label htmlFor="orientador" className="font-bold text-base text-black">Nombre del docente orientador</Label>
                    <div className="flex justify-between gap-12">
                        <div>
                            <SearchableSelector placeholder="Selecciona al docente orientador" items={docentes} />
                            <div className="flex items-center gap-2 mt-1">
                                <Info className="w-4" /><span className="text-sm text-gray-600">Si no encuentras al docente puedes realizar la solicitud para agregar a un nuevo docente pulsando en el botón</span>
                            </div>
                        </div>
                        <FormDocenteDialog
                            textButtonTrigger="Solicitar nuevo docente"
                            textButtonSubmit="Solicitar"
                            title="Formulario registrar docente"
                            description="Ingresa cada uno de los campos para solicitar el registro de un nuevo docente" />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                    <div className="grid gap-2">
                        <Label htmlFor="meses" className="font-bold text-base text-black">Tiempo proyectado para ejecutarlo (en meses)</Label>
                        <Input type="number" id="meses" placeholder="Número de meses" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="estado" className="font-bold text-base text-black">Estado actual del proyecto</Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="lg" className="h-8 gap-1">
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Seleccione el estado del proyecto
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
                    <div className="grid gap-2">
                        <Label htmlFor="estado" className="font-bold text-base text-black">Tipo de proyecto</Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="lg" className="h-8 gap-1">
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Seleccione el tipo de proyecto
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
                        <Button size="sm" variant="default" className="gap-1 bg-green-600 hover:bg-green-500 font-bold">
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
                                <TableRow>
                                    <TableCell>
                                        Juan Perez
                                    </TableCell>
                                    <TableCell>
                                        1928456271
                                    </TableCell>
                                    <TableCell>
                                        1142563
                                    </TableCell>
                                    <TableCell>
                                        8
                                    </TableCell>
                                    <TableCell>
                                        juan@ufps.edu.co
                                    </TableCell>
                                    <TableCell>
                                        3224561789
                                    </TableCell>
                                    <TableCell>
                                        <Button size="sm" className="gap-1 bg-red-600  hover:bg-red-400">
                                            <MinusCircle className="h-3.5 w-3.5" />
                                            Retirar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Maria Gutierrez
                                    </TableCell>
                                    <TableCell>
                                        1928456271
                                    </TableCell>
                                    <TableCell>
                                        1142563
                                    </TableCell>
                                    <TableCell>
                                        9
                                    </TableCell>
                                    <TableCell>
                                        maria@ufps.edu.co
                                    </TableCell>
                                    <TableCell>
                                        3224561789
                                    </TableCell>
                                    <TableCell>
                                        <Button size="sm" className="gap-1 bg-red-600  hover:bg-red-400">
                                            <MinusCircle className="h-3.5 w-3.5" />
                                            Retirar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </Card>

            </form>
            <CardFooter className="mt-8">
                <span className="text-sm">Pasa a la siguiente sección en donde proporcionarás información detallada del proyecto</span>
            </CardFooter>
            <Toaster />
        </>
    );
};