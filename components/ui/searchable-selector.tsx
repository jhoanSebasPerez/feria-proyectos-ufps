'use client'

import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Docente } from '@/app/common/interfaces'

interface SearchableSelectorProps {
    items: Docente[]
    placeholder?: string
}

export default function SearchableSelector({
    items = [],
    placeholder = 'Selecciona un item...',
}: SearchableSelectorProps) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState<string | undefined>(undefined)
    const [query, setQuery] = React.useState('')

    // Filtrar los items según el query
    const filteredItems = items.filter(item =>
        item.nombre.toLowerCase().includes(query.toLowerCase())
    )

    // Obtener el nombre del item seleccionado
    const selectedItem = items.find(item => item.codigo === value)?.nombre

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {selectedItem || placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>

            {/* Ajustes para el ancho y alineación */}
            <PopoverContent className="w-full min-w-full left-0 p-0">
                <div className="p-2">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full border px-2 py-1 rounded"
                    />
                </div>
                <ul className="max-h-60 overflow-y-auto">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <li
                                key={item.codigo}
                                onClick={() => {
                                    setValue(item.codigo)
                                    setOpen(false)
                                }}
                                className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${value === item.codigo ? 'bg-gray-200' : ''
                                    }`}
                            >
                                {item.codigo} - {item.nombre}
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-2 text-gray-500">No se encontraron resultados.</li>
                    )}
                </ul>
            </PopoverContent>
        </Popover>
    )
}