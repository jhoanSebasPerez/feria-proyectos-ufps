"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon, MinusCircle, PlusCircle, SendHorizonalIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns"


export default function AdminCrearConvocatoria() {

    const [date, setDate] = useState<Date>()

    return (
        <>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-1 lg:gap-8">

                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <div className="grid gap-6 w-full">
                        <Card x-chunk="dashboard-04-chunk-1">
                            <CardHeader>
                                <CardTitle className="text-2xl">Crear convocatoria</CardTitle>
                                <CardDescription>
                                    Proporciona la información necesaria para crear una nueva convocatoria.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid gap-2">
                                        <Label htmlFor="titulo" className="font-bold text-base text-black">Titulo de la convocatoria</Label>
                                        <Input id="titulo" placeholder="Titulo de la convocatoria" />
                                    </div>
                                    <div className="grid gap-2 mt-6">
                                        <Label htmlFor="titulo" className="font-bold text-base text-black">Descripción de la convocatoria</Label>
                                        <Textarea id="titulo" placeholder="Descripción de la convocatoria" />
                                    </div>
                                    <div className="flex justify-between mt-7">
                                        <div className="flex space-x-5 items-center">
                                            <Label htmlFor="titulo" className="font-bold text-base text-black">Fecha de apertura</Label>
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
                                                        {date ? format(date, "PPP") : <span>Elige la fecha de apertura</span>}
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
                                        <div className="flex space-x-5 items-center">
                                            <Label htmlFor="titulo" className="font-bold text-base text-black">Fecha de clausura</Label>
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
                                                        {date ? format(date, "PPP") : <span>Elige la fecha de clausura</span>}
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

                                </form>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4">
                                <Button className="bg-base"><SendHorizonalIcon className="mr-2" /> Enviar</Button>
                            </CardFooter>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    );
}