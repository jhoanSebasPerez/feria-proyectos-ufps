import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const description =
    "Ingresa con tu correo institucional para acceder a la plataforma"


export default function LoginForm() {
    return (
        <div
            className="flex min-h-screen items-center justify-center"
            style={{
                backgroundImage: 'url(images/background-login.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add a background color with opacity
                backgroundBlendMode: 'overlay', // Blend the background image with the color
            }}
        >
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Inicio de Sesión</CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Correo Electrónico</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="example@ufps.edu.co"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Contraseña</Label>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Link href="/restablecer-contrasena" className="inline-block text-sm underline">
                            Olvidaste tu contraseña?
                        </Link>
                        <Link href="/" type="submit" >
                            <Button className="bg-base hover:bg-base-hover w-full mt-8 py-5">
                                Iniciar Sesión
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
