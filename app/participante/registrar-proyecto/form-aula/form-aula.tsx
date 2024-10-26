"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { FormSection1 } from "./form-seccion-1";
import { FormSection2 } from "./form-section-2";
import { IconLeft, IconRight } from "react-day-picker";
import { Send } from "lucide-react";
import { EndSection } from "./end-section";


export const FormAula = () => {

    const [section, setSection] = useState(1);

    const sections: any = {
        1: <FormSection1 />,
        2: <FormSection2 />,
        3: <EndSection />
    };

    return (
        <>
            <Card x-chunk="dashboard-04-chunk-1">
                {
                    section < 3 ? (
                        <CardHeader>
                            <CardTitle className="text-2xl">Crear Proyecto de Aula</CardTitle>
                            <CardDescription>
                                Proporciona la información necesaria para crear un proyecto de aula. <span className="font-bold text-primary">Recuerda que la modalidad de presentación es en poster</span>
                            </CardDescription>
                        </CardHeader>
                    ) : null
                }
                <CardContent>
                    {sections[section]}
                </CardContent>

            </Card>
            <div className="flex justify-between items-center mt-8">

                {section == 3 ? null : (
                    <>
                        {section > 1 && <Button className="bg-base" onClick={(e) => setSection(section - 1)}><IconLeft /> Sección anterior</Button>}
                        <Button className="bg-base" onClick={(e) => setSection(section + 1)}>{section == 2 ? "Enviar" : "Siguiente sección"} {section == 2 ? <Send className="ml-2" /> : <IconRight />}</Button>
                    </>)}
            </div>
        </>
    );
}