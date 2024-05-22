class Tarea{
    constructor(nombre,descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.completado = false;
    }

    completarTarea(){
        this.completado = true;
    }
}