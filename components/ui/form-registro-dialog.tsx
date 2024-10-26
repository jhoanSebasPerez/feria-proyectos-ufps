'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from "@/hooks/use-toast"
import { PlusCircle } from 'lucide-react'

const formSchema = z.object({
    code: z.string().min(6, {
        message: 'El código debe tener al menos 6 caracteres.',
    }),
    name: z.string().min(5, {
        message: 'El nombre debe tener al menos 5 caracteres.',
    }),
    email: z.string().email({
        message: 'Por favor ingrese una dirección de correo electrónico válida.',
    }).refine((email) => email.endsWith('@ufps.edu.co'), {  // Valida que el dominio sea el esperado
        message: "El correo debe ser del dominio '@ufps.edu.co'",
    }),
})

interface FormDialogDocenteProps {
    textButtonTrigger: string;
    textButtonSubmit: string;
    title: string;
    description: string;
}

export default function FormDocenteDialog(
    { textButtonTrigger, textButtonSubmit, title, description }: FormDialogDocenteProps) {
    const [open, setOpen] = React.useState(false)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            code: '',
            name: '',
            email: '',
        },
    })

    function onSubmit(_values: z.infer<typeof formSchema>) {
        toast({
            title: "Solicitud enviada",
            description: (
                <p>Se ha enviado la solicitud, recibirás un correo del estado de tu solicitud</p>
            ),
            type: "background",
            style: {
                backgroundColor: "green",
                color: "white",
            },
            duration: 3000,
        })
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="lg" className="rounded-lg bg-green-600 hover:bg-green-500 py-3 px-2 text-sm text-white font-bold"><PlusCircle className="h-3.5 w-3.5 mr-1" /> {textButtonTrigger}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Código</FormLabel>
                                    <FormControl>
                                        <Input placeholder="172654" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre completo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Juan Gonzáles" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo electrónico</FormLabel>
                                    <FormControl>
                                        <Input placeholder="gonzales@example.com" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='pt-5 w-full flex justify-center'>
                            <Button type="submit" className='bg-green-600 hover:bg-green-500' >{textButtonSubmit}</Button>

                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}