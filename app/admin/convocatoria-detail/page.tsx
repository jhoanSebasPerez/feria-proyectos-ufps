"use client";

import { format } from "date-fns"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { CalendarIcon, Download, MinusCircle, PlusCircle, Upload } from "lucide-react"

export default function AdminConvocatoriaDetail() {

    const [date, setDate] = useState<Date>()

    return (
        <>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <Card x-chunk="dashboard-07-chunk-0">
                        <CardHeader>
                            <CardTitle className="text-2xl">Detalle de la convocatoria</CardTitle>
                            <CardDescription>
                                Lipsum dolor sit amet, consectetur adipiscing elit
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name" className="font-bold">Título</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        defaultValue="Gamer Gear Pro Controller"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="description" className="font-bold">Descripción</Label>
                                    <Textarea
                                        id="description"
                                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                                        className="min-h-32"
                                    />
                                </div>
                                <div className="grid gap-2 mt-4">

                                    <div className="flex justify-between">
                                        <Label className="font-bold">Evaluadores</Label>
                                        <Button size="sm" variant="default" className="gap-1 bg-green-600 hover:bg-green-500 font-bold">
                                            <PlusCircle className="h-3.5 w-3.5" />
                                            Agregar Evaluador
                                        </Button>
                                    </div>

                                    <div className="grid gap-2">

                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Nombre</TableHead>
                                                    <TableHead>Correo</TableHead>
                                                    <TableHead>Acciones</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        Juan Perez
                                                    </TableCell>
                                                    <TableCell>
                                                        juan@ufps.edu.co
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
                                                        Juan Perez
                                                    </TableCell>
                                                    <TableCell>
                                                        juan@ufps.edu.co
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
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <Card x-chunk="dashboard-07-chunk-3">
                        <CardHeader>
                            <CardTitle>Estado de la convocatoria</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="status">Estado</Label>
                                    <Select>
                                        <SelectTrigger id="status" aria-label="Activo" className="bg-green-500 text-white font-bold">
                                            <SelectValue placeholder="Activo" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="terminado">Terminado</SelectItem>
                                            <SelectItem value="suspendido">Suspendido</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <div className="grid gap-3 mt-4">
                                        <Label htmlFor="initialDate">Fecha de inicio</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[280px] justify-start text-left font-normal",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP") : <span>24/05/2024</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>

                                        <Label htmlFor="initialDate">Fecha de terminación</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[280px] justify-start text-left font-normal",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP") : <span>24/06/2024</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>


                            </div>
                        </CardContent>
                    </Card>

                    <Card x-chunk="dashboard-07-chunk-5">
                        <CardHeader>
                            <CardTitle>Documentos de la convocatoria</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <div className="grid gap-2">
                                    {["Requisitos.pdf", "Rúbrica.pdf"].map((doc, index) => (
                                        <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                                            <span className="text-sm text-gray-500">{doc}</span>
                                            <Button size="sm" variant="ghost" className="gap-1 text-sm">
                                                <Download className="h-4 w-4" />
                                                Descargar
                                            </Button>
                                        </div>
                                    ))}
                                    <Button className="w-full bg-base">
                                        <Upload className="h-4 wr-2" />
                                        Subir Documento
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div >
            <Card x-chunk="dashboard-07-chunk-1">
                <CardHeader>
                    <CardTitle>Proyectos</CardTitle>
                    <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Id</TableHead>
                                <TableHead>Nombre</TableHead>
                                <TableHead>tipo</TableHead>
                                <TableHead>estado</TableHead>
                                <TableHead></TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold">
                                    P001
                                </TableCell>
                                <TableCell>
                                    Proyecto 001
                                </TableCell>
                                <TableCell>
                                    Proyecto de Aula
                                </TableCell>
                                <TableCell>
                                    Formulación
                                </TableCell>
                                <TableCell>
                                    <Button size="sm" className="gap-1 bg-blue-400">
                                        <PlusCircle className="h-3.5 w-3.5" />
                                        Ver Detalles
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold">
                                    P002
                                </TableCell>
                                <TableCell>
                                    Proyecto 002
                                </TableCell>
                                <TableCell>
                                    proyecto de Semillero
                                </TableCell>
                                <TableCell>
                                    Ejecución
                                </TableCell>
                                <TableCell>
                                    <Button size="sm" className="gap-1 bg-blue-400">
                                        <PlusCircle className="h-3.5 w-3.5" />
                                        Ver Detalles
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold">
                                    P003
                                </TableCell>
                                <TableCell>
                                    Proyecto 003
                                </TableCell>
                                <TableCell>
                                    Proyecto de Aula
                                </TableCell>
                                <TableCell>
                                    Formulación
                                </TableCell>
                                <TableCell>
                                    <Button size="sm" className="gap-1 bg-blue-400">
                                        <PlusCircle className="h-3.5 w-3.5" />
                                        Ver Detalles
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="justify-center p-4">
                    <span className="text-gray-500 text-sm">Total de proyectos para esta convocatoria: 3</span>
                </CardFooter>
            </Card>
        </>
    );
}