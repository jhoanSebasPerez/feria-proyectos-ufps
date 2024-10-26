"use client";

import { format } from "date-fns"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { ArrowRight, CalendarIcon, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ConvocatoriaDetailPage() {

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

                            </div>

                            <div className="mt-6">
                                <Label className="mt-5 font-bold" > Proyecto Inscrito</Label>
                                <Card className="mt-3">
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <div className="grid gap-1">
                                            <CardTitle>Titulo del proyecto</CardTitle>
                                            <Badge className="bg-blue-600 hover:bg-blue-500 py-1">Proyecto de Aula</Badge>
                                        </div>
                                        <Link href="/participante/proyecto-detalle">
                                            <Button className="w-14" variant="outline">
                                                <ArrowRight className="w-full" />
                                            </Button>
                                        </Link>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm">Breve descripción del proyecto</p>
                                        <div className="mt-6 grid gap-2">
                                            <Label className="font-bold">Observaciones del jurado</Label>
                                            <Textarea rows={5}> Observaciones realizadas por el jurado</Textarea>
                                            <span className="text-sm text-gray-700 font-bold">Fecha de última observación: 24/05/2024</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                </div >
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
                                    </Select>
                                    <div className="grid gap-3 mt-4">


                                        <Label htmlFor="initialDate">Fecha de terminación</Label>
                                        <Popover>
                                            <PopoverTrigger disabled={true} asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[280px] justify-start text-left font-normal",
                                                        !date && "text-black"
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
                </div>
            </div >

        </>
    );
}