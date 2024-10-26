export interface Convocatoria {
    id: number;
    titulo: string;
    descripcion: string;
    fechaFin: Date;
    fechaInicio: Date;
    isActive: boolean;
    imagen?: string;
    tipo: string;
}

export interface Participante {
    dni: string;
    nombre: string;
    correo: string;
    codigo: string;
    semestre: number;
    telefono: string;
}

export interface Docente {
    codigo: string;
    nombre: string;
}