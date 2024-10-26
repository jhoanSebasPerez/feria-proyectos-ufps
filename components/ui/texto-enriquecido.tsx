import { useRef, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function EditorTextoEnriquecido() {
    const editorRef = useRef<HTMLDivElement>(null);
    const [isEmpty, setIsEmpty] = useState(true);

    // Ejecuta comandos de edición en el área de texto editable
    const execCommand = (command: string, value?: string) => {
        if (editorRef.current) {
            document.execCommand(command, false, value);
            editorRef.current.focus();
        }
    };

    // Revisa si el contenido está vacío para mostrar el "placeholder"
    const handleInput = () => {
        if (editorRef.current) {
            const text = editorRef.current.innerText.trim();
            setIsEmpty(text === "");
        }
    };

    return (
        <div className="flex flex-col">
            <div className="bg-background border-b px-4 py-2 flex items-center gap-2">
                {/* Dropdown para selección de fuente */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-1">
                            <TypeIcon className="w-4 h-4" />
                            <span>Font</span>
                            <ChevronDownIcon className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => execCommand('fontName', 'Arial')}>
                            <TypeIcon className="w-4 h-4 mr-2" /> Arial
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => execCommand('fontName', 'Times New Roman')}>
                            <TypeIcon className="w-4 h-4 mr-2" /> Times New Roman
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => execCommand('fontName', 'Verdana')}>
                            <TypeIcon className="w-4 h-4 mr-2" /> Verdana
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Dropdown para selección de tamaño */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-1">
                            <TextIcon className="w-4 h-4" />
                            <span>Size</span>
                            <ChevronDownIcon className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {[8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40].map((size) => (
                            <DropdownMenuItem key={size} onClick={() => execCommand('fontSize', size.toString())}>
                                {size}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Botones de alineación */}
                <ToggleGroup type="single" defaultValue="left" variant="outline">
                    <ToggleGroupItem value="left" onClick={() => execCommand("justifyLeft")}>
                        <AlignLeftIcon className="w-4 h-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="center" onClick={() => execCommand("justifyCenter")}>
                        <AlignCenterIcon className="w-4 h-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="right" onClick={() => execCommand("justifyRight")}>
                        <AlignRightIcon className="w-4 h-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="justify" onClick={() => execCommand("justifyFull")}>
                        <AlignJustifyIcon className="w-4 h-4" />
                    </ToggleGroupItem>
                </ToggleGroup>

                {/* Botones de formato de texto */}
                <ToggleGroup type="single" defaultValue="normal" variant="outline">
                    <ToggleGroupItem value="bold" onClick={() => execCommand("bold")}>
                        <BoldIcon className="w-4 h-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" onClick={() => execCommand("italic")}>
                        <ItalicIcon className="w-4 h-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" onClick={() => execCommand("underline")}>
                        <UnderlineIcon className="w-4 h-4" />
                    </ToggleGroupItem>
                </ToggleGroup>

                {/* Dropdown para seleccionar color */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-1">
                            <PaletteIcon className="w-4 h-4" />
                            <span>Color</span>
                            <ChevronDownIcon className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {['red', 'green', 'blue', 'yellow', 'purple', 'pink'].map((color) => (
                            <DropdownMenuItem key={color} onClick={() => execCommand("foreColor", color)}>
                                <div className={`w-4 h-4 rounded-full bg-${color}-500`} />
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Botones de deshacer y rehacer */}
                <Button variant="ghost" size="icon" onClick={() => execCommand("undo")}>
                    <UndoIcon className="w-4 h-4" />
                    <span className="sr-only">Undo</span>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => execCommand("redo")}>
                    <RedoIcon className="w-4 h-4" />
                    <span className="sr-only">Redo</span>
                </Button>
            </div>

            {/* Área de texto editable con simulación de placeholder */}
            <div
                ref={editorRef}
                contentEditable
                className={`mt-3 flex-1 p-4 border border-gray-300 rounded-lg overflow-auto focus:outline-none ${isEmpty ? 'text-gray-400' : 'text-black'}`}
                style={{ minHeight: '200px', maxHeight: '350px' }}
                onInput={handleInput}
                suppressContentEditableWarning={true}
            >
                {isEmpty ? "Escríbe los obejtivos específicos del proyecto" : ""}
            </div>
        </div>
    );
}
function AlignCenterIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="17" x2="7" y1="12" y2="12" />
            <line x1="19" x2="5" y1="18" y2="18" />
        </svg>
    )
}


function AlignJustifyIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
    )
}


function AlignLeftIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="15" x2="3" y1="12" y2="12" />
            <line x1="17" x2="3" y1="18" y2="18" />
        </svg>
    )
}


function AlignRightIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="21" x2="9" y1="12" y2="12" />
            <line x1="21" x2="7" y1="18" y2="18" />
        </svg>
    )
}


function BoldIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
        </svg>
    )
}


function ChevronDownIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}


function ItalicIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="19" x2="10" y1="4" y2="4" />
            <line x1="14" x2="5" y1="20" y2="20" />
            <line x1="15" x2="9" y1="4" y2="20" />
        </svg>
    )
}


function PaletteIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
    )
}


function RedoIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 7v6h-6" />
            <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
        </svg>
    )
}


function TextIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 6.1H3" />
            <path d="M21 12.1H3" />
            <path d="M15.1 18H3" />
        </svg>
    )
}


function TypeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="4 7 4 4 20 4 20 7" />
            <line x1="9" x2="15" y1="20" y2="20" />
            <line x1="12" x2="12" y1="4" y2="20" />
        </svg>
    )
}


function UnderlineIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 4v6a6 6 0 0 0 12 0V4" />
            <line x1="4" x2="20" y1="20" y2="20" />
        </svg>
    )
}


function UndoIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 7v6h6" />
            <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
        </svg>
    )
}