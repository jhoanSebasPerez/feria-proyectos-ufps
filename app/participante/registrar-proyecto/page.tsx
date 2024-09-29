
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { FormAula } from "./form-aula/form-aula";
import { FormSemillero } from "./form-semillero";


export default function RegistrarProyecto() {

    return (
        <>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-1 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <h1 className="font-bold text-3xl">Registrar Proyecto</h1>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <div className="grid gap-6 w-full">
                        <Tabs defaultValue="aula">
                            <div className="flex items-center">
                                <TabsList>
                                    <TabsTrigger value="aula">Proyecto de Aula</TabsTrigger>
                                    <TabsTrigger value="semillero">Proyecto Semillero</TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value="aula">
                                <FormAula />
                            </TabsContent>
                            <TabsContent value="semillero">
                                <FormSemillero />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
}