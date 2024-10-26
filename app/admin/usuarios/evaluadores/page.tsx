'use client'

import * as React from 'react'
import { CheckCircle, XCircle, Search, ChevronUp, ChevronDown, Filter, PlusCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import FormDocenteDialog from '@/components/ui/form-registro-dialog'

interface User {
    id: string
    code: string
    name: string
    email: string
    academicProgram: string
    isActive: boolean
    createdAt: Date
}

const initialUsers: User[] = [
    {
        id: '1',
        code: 'USR001',
        name: 'John Doe',
        email: 'john.doe@example.com',
        academicProgram: 'Computer Science',
        isActive: true,
        createdAt: new Date('2023-01-15'),
    },
    {
        id: '2',
        code: 'USR002',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        academicProgram: 'Engineering',
        isActive: false,
        createdAt: new Date('2023-02-20'),
    },
    {
        id: '3',
        code: 'USR003',
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        academicProgram: 'Mathematics',
        isActive: true,
        createdAt: new Date('2023-03-10'),
    },
    {
        id: '4',
        code: 'USR004',
        name: 'Bob Williams',
        email: 'bob.williams@example.com',
        academicProgram: 'Physics',
        isActive: true,
        createdAt: new Date('2023-04-05'),
    },
    {
        id: '5',
        code: 'USR005',
        name: 'Carol Brown',
        email: 'carol.brown@example.com',
        academicProgram: 'Chemistry',
        isActive: false,
        createdAt: new Date('2023-05-12'),
    },
]

export default function EvaluadoresPage() {
    const [users, setUsers] = React.useState<User[]>(initialUsers)
    const [searchTerm, setSearchTerm] = React.useState('')
    const [sortField, setSortField] = React.useState<keyof User>('name')
    const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc')
    const [academicProgramFilter, setAcademicProgramFilter] = React.useState<string>('all')
    const [statusFilter, setStatusFilter] = React.useState<string>('all')

    const toggleUserStatus = (userId: string) => {
        setUsers(prevUsers =>
            prevUsers.map(user =>
                user.id === userId ? { ...user, isActive: !user.isActive } : user
            )
        )
    }

    const handleSort = (field: keyof User) => {
        if (field === sortField) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field)
            setSortDirection('asc')
        }
    }

    const filteredAndSortedUsers = React.useMemo(() => {
        return users
            .filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (academicProgramFilter === 'all' || user.academicProgram === academicProgramFilter) &&
                (statusFilter === 'all' ||
                    (statusFilter === 'enabled' && user.isActive) ||
                    (statusFilter === 'disabled' && !user.isActive))
            )
            .sort((a, b) => {
                if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1
                if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1
                return 0
            })
    }, [users, searchTerm, sortField, sortDirection, academicProgramFilter, statusFilter])

    const uniqueAcademicPrograms = Array.from(new Set(users.map(user => user.academicProgram)))

    return (
        <Card className="w-full">
            <CardHeader className='flex flex-row items-center justify-between mb-3'>
                <CardTitle className="text-2xl font-bold">Información de los evaluadores</CardTitle>
                <FormDocenteDialog
                    textButtonTrigger='Agregar nuevo evaluador'
                    textButtonSubmit='Agregar evaluador'
                    title='Formulario registro evaluador'
                    description='Ingresa cada uno de los campos para registrar a un nuevo evaluador' />
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="relative">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                            <Input
                                type="text"
                                placeholder="Busca un participante por su nombre..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-8 w-full sm:w-96"
                            />
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <Select value={academicProgramFilter} onValueChange={setAcademicProgramFilter}>
                                <SelectTrigger className="w-[240px]">
                                    <SelectValue placeholder="Academic Program" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Filtra por programa académico</SelectItem>
                                    {uniqueAcademicPrograms.map(program => (
                                        <SelectItem key={program} value={program}>{program}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Filtra por estado</SelectItem>
                                    <SelectItem value="enabled">Enabled</SelectItem>
                                    <SelectItem value="disabled">Disabled</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px] font-bold">Código</TableHead>
                                    <TableHead>
                                        <Button variant="ghost" onClick={() => handleSort('name')} className="font-bold pl-0">
                                            Nombre completo
                                            {sortField === 'name' && (
                                                sortDirection === 'asc' ? <ChevronUp className="ml-2 h-4 w-4 inline" /> : <ChevronDown className="ml-2 h-4 w-4 inline" />
                                            )}
                                        </Button>
                                    </TableHead>
                                    <TableHead className='font-bold'>Correo electrónico</TableHead>

                                    <TableHead className="w-[100px] font-bold">Estado</TableHead>
                                    <TableHead>
                                        <Button variant="ghost" onClick={() => handleSort('createdAt')} className="font-bold pl-0">
                                            Se unió el
                                            {sortField === 'createdAt' && (
                                                sortDirection === 'asc' ? <ChevronUp className="ml-2 h-4 w-4 inline" /> : <ChevronDown className="ml-2 h-4 w-4 inline" />
                                            )}
                                        </Button>
                                    </TableHead>
                                    <TableHead className="w-[100px] font-bold">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredAndSortedUsers.map((user) => (
                                    <TableRow key={user.id} className="transition-colors hover:bg-muted/50">
                                        <TableCell className="font-medium">{user.code}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            {user.isActive ? (
                                                <CheckCircle className="h-5 w-5 text-green-500" />
                                            ) : (
                                                <XCircle className="h-5 w-5 text-red-500" />
                                            )}
                                        </TableCell>
                                        <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
                                        <TableCell>
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button
                                                        variant={user.isActive ? "destructive" : "default"}
                                                        size="sm"
                                                        className="font-bold transition-all duration-200 ease-in-out transform hover:scale-105 w-full"
                                                    >
                                                        {user.isActive ? 'Deshabilitar' : 'Habilitar'}
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>{`${user.isActive ? "Deshabilitar" : "Habilitar"} Evaluador`}</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            {`Deseas ${user.isActive ? "deshabilitar" : "habilitar"} a `}<span className='font-bold text-black'>{user.name}</span>
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                        <AlertDialogAction onClick={(e) => toggleUserStatus(user.id)}>Aceptar</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    {filteredAndSortedUsers.length === 0 && (
                        <div className="text-center py-4 text-gray-500">
                            No users found matching the current filters.
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}