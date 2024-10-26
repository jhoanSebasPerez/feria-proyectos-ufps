import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditorTextoEnriquecido } from "@/components/ui/texto-enriquecido";


export const FormSection2 = () => {
    return (
        <div>
            <div className="grid gap-2 mt-6">
                <Label htmlFor="titulo" className="font-bold text-base text-black">Titulo del proyecto (máx. 40 palabras)</Label>
                <Input id="titulo" placeholder="Titulo del proyecto" />
            </div>

            <div className="grid gap-2 mt-6">
                <Label htmlFor="objetivo" className="font-bold text-base text-black">Objetivo general</Label>
                <Input id="titulo" placeholder="Objetivo general" />
            </div>

            <div className="grid gap-2 mt-6">
                <Label htmlFor="objetivo" className="font-bold text-base text-black">Objetivos específicos</Label>
                <EditorTextoEnriquecido />
            </div>

            <div className="grid gap-2 mt-6">
                <Label htmlFor="objetivo" className="font-bold text-base text-black">Alcance del proyecto y limitaciones</Label>
                <EditorTextoEnriquecido />
            </div>

            <div className="grid gap-2 mt-6">
                <Label htmlFor="objetivo" className="font-bold text-base text-black">Estado del arte</Label>
                <EditorTextoEnriquecido />
            </div>

            <div className="grid gap-2 mt-6">
                <Label htmlFor="objetivo" className="font-bold text-base text-black">Resultados esperados y/o obtenidos</Label>
                <EditorTextoEnriquecido />
            </div>

            <div className="grid gap-2 mt-6">
                <Label htmlFor="objetivo" className="font-bold text-base text-black">Presupuesto del proyecto</Label>
                <Input type="number" />
            </div>

            <div className="grid gap-2 mt-6">
                <Label htmlFor="objetivo" className="font-bold text-base text-black">Fuentes de financiación</Label>
                <Input placeholder="Fuentes de financiación" />
            </div>

            <div className="grid gap-2 mt-6">
                <Label htmlFor="objetivo" className="font-bold text-base text-black">Referencias bibliográficas (Normas APA)</Label>
                <EditorTextoEnriquecido />
            </div>

            <div className="grid gap-2 mt-6">
                <Label htmlFor="objetivo" className="font-bold text-base text-black">Observaciones y/o visto bueno del docente</Label>
                <EditorTextoEnriquecido />
            </div>
        </div>

    );
}