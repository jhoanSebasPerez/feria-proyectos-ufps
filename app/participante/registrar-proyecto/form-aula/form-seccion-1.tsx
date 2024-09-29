"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, ListFilter, MinusCircle, PlusCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EditorTextoEnriquecido } from "@/components/ui/texto-enriquecido";


export const FormSection1 = () => {

    const [date, setDate] = useState<Date>()

    return (
        <>
            <form>
                <div className="grid gap-2">
                    <Label htmlFor="curso" className="font-bold text-base text-black">Nombre del curso (grupo)</Label>
                    <Input id="curso" placeholder="Nombre del curso" />
                </div>
                <div className="grid gap-2 mt-6">
                    <Label htmlFor="orientador" className="font-bold text-base text-black">Nombre del docente orientador</Label>
                    <Input id="orientador" placeholder="Nombre del docente orientador" />
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
        </>
    );
};