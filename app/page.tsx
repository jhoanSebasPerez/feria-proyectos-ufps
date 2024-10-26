import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
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
      <Card className="mx-auto max-w-xlg w-11/12">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Feria de Proyectos Ingeniería de Sistemas</CardTitle>
          <CardDescription>
            Mockups para el proyecto: Feria de Proyectos Ingeniería de Sistemas UFPS.
            <br />
            <span className="font-bold text-primary text-lg">Usa las flechas de tu navegador para regresar a este panel</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4 mt-4">

          <Card className="w-1/4">
            <CardHeader>
              <CardTitle>Usuario</CardTitle>
              <CardDescription>Vista para todos los usuarios</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Link href="/login">
                <Button className="bg-base w-full">Iniciar sesión</Button>
              </Link>
              <Link href="/admin/informacion-personal">
                <Button className="bg-base w-full">Mostrar perfil</Button>
              </Link>
              <Link href="/restablecer-contrasena">
                <Button className="bg-base w-full">Restablecer contraseña</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="w-1/4">
            <CardHeader>
              <CardTitle>Administrador</CardTitle>
              <CardDescription>Vista usada para el administrador</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Link href="/admin/convocatorias">
                <Button className="bg-base w-full">Listar convocatorias</Button>
              </Link>
              <Link href="/admin/convocatoria-detalle">
                <Button className="bg-base w-full">Mostrar detalle de una convocatoria</Button>
              </Link>
              <Link href="/admin/crear-convocatoria">
                <Button className="bg-base w-full">Crear una convocatoria</Button>
              </Link>
              <Link href="/admin/usuarios/participantes">
                <Button className="bg-base w-full">Mostrar listado de participantes</Button>
              </Link>
              <Link href="/admin/usuarios/evaluadores">
                <Button className="bg-base w-full">Mostrar listado de evaluadores</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="w-1/4">
            <CardHeader>
              <CardTitle>Participante</CardTitle>
              <CardDescription>Vista usada para el participante</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Link href="/participante/convocatoria-detalle">
                <Button className="bg-base w-full">Detalle de una convocatoria inscrita</Button>
              </Link>
              <Link href="/participante/convocatorias">
                <Button className="bg-base w-full">Mostrar convocatorias inscritas</Button>
              </Link>
              <Link href="/participante/convocatorias">
                <Button className="bg-base w-full">Mostrar convocatorias inscritas</Button>
              </Link>
              <Link href="/participante/proyecto-detalle">
                <Button className="bg-base w-full">Detalle de un proyecto inscrito</Button>
              </Link>
              <Link href="/participante/registrar-proyecto">
                <Button className="bg-base w-full">Registrar un proyecto</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="w-1/4">
            <CardHeader>
              <CardTitle>Evaluador</CardTitle>
              <CardDescription>Vista usada para el evaluador</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/jurado/proyectos/calificados">
                <Button className="bg-base w-full">Proyectos calificados</Button>
              </Link>
            </CardContent>
          </Card>


        </CardContent>
      </Card>
    </div >
  )
}
