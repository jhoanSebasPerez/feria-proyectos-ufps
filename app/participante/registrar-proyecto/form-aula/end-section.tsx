import { Button } from "@/components/ui/button"

export const EndSection = () => {
    return (
        <div className="mt-8">
            <span className="font-bold text-3xl">Tu proyecto a sido envíado a revisión</span>
            <p className="mt-2">Serás notificado por correo electrónico cualquier novedad con tu proyecto</p>
            <Button className="mt-6">Regresar a inicio</Button>
        </div>
    )
};