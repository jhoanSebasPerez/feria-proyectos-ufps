"use client"

import { useRef, useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Upload } from "lucide-react";

export default function ProfilePage() {

    const [modify, setModify] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        // Simula el clic en el input file oculto
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            // Aquí puedes manejar el archivo seleccionado
            console.log(files[0]); // Muestra el archivo seleccionado en consola
        }
    };


    return (
        <>
            <h1 className="text-2xl ">Información Personal</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Datos personales</CardTitle>
                    <CardDescription>Consulta tu información personal</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                    <Card
                        className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                    >
                        <CardHeader>
                            <CardTitle className="mt-1">Imágen de perfil</CardTitle>
                            <CardDescription>
                                Sube una imágen de perfil
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <Image
                                    alt="Product image"
                                    className="aspect-square w-full rounded-md object-cover"
                                    height="150"
                                    src="/images/profile-img.jpg"
                                    width="150"
                                />
                                <div className="grid grid-cols-3 gap-2">


                                    <div>
                                        <button onClick={handleButtonClick} className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                            <Upload className="h-4 w-4 text-muted-foreground" />
                                            <span className="sr-only">Subir nueva imágen</span>
                                        </button>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: "none" }}
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="flex-1 py-5 px-3">
                        <CardContent>
                            <form>
                                <div className="flex gap-10 items-center justify-between">
                                    <Label htmlFor="codigo" className="w-1/6 text-base text-black">Código</Label>
                                    <Input className="w-5/6" id="codigo" value="1151574" disabled={!modify} />
                                </div>
                                <div className="flex gap-10 items-center mt-3">
                                    <Label htmlFor="nombre" className="w-1/6 text-base text-black">Nombre</Label>
                                    <Input className="w-5/6" id="nombre" value="Juan José Gómez" disabled={!modify} />
                                </div>
                                <div className="flex gap-10 items-center justify-between mt-3">
                                    <Label htmlFor="correo" className="w-1/6 text-base text-black">Correo</Label>
                                    <Input className="w-5/6" id="correo" value="juango@ufps.edu.co" disabled={!modify} />
                                </div>
                                <div className="flex gap-10 items-center justify-between mt-3">
                                    <Label htmlFor="rol" className="w-1/6 text-base text-black">Rol en la institución</Label>
                                    <Input className="w-5/6" id="rol" value="Directora programa ing de sistemas" disabled={!modify} />
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </>
    );
}