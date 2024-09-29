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
      <Card className="mx-auto max-w-xlg">
        <CardHeader>
          <CardTitle className="text-3xl">Feria de Proyectos Ingeniería de Sistemas</CardTitle>
          <CardDescription>
            Mockups para el proyecto: Feria de Proyectos Ingeniería de Sistemas UFPS.
            <br />
            <span className="font-bold text-primary text-lg">Usa las flechas de tu navegador para regresar a este panel</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5">
          <Link href="/login">
            <Button size="lg" className="w-full bg-base font-bold">
              Vista de Iniciar Sesión
            </Button>
          </Link>
          <Link href="/admin/convocatorias">
            <Button size="lg" className="w-full bg-base font-bold">
              Vista de las convocatorias
            </Button>
          </Link>
          <Link href="/admin/convocatoria-detail">
            <Button size="lg" className="w-full bg-base font-bold">
              Vista de información detallada de una convocatoria
            </Button>
          </Link>
          <Link href="/admin/crear-convocatoria">
            <Button size="lg" className="w-full bg-base font-bold">
              Vista de crear una convocatoria
            </Button>
          </Link>
          <Link href="/participante/registrar-proyecto">
            <Button size="lg" className="w-full bg-base font-bold">
              Vista de registrar un proyecto (pulsa el botón de siguiente sección)
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div >
  )
}
