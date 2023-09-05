class Tarea {
  nombre: string
  fechaVencimiento: Date
  completada: boolean

  constructor (nombre: string, fechaVencimiento: Date) {
    this.nombre = nombre
    this.fechaVencimiento = fechaVencimiento
    this.completada = false // Por defecto, la tarea no está completada
  }

  completarTarea () {
    this.completada = true
  }

  descompletarTarea () {
    this.completada = false
  }
}

// Ejemplo de uso
const tarea1 = new Tarea('Hacer la compra', new Date('2023-09-30'))
const tarea2 = new Tarea('Estudiar para el examen', new Date('2023-10-05'))

// Completar una tarea
tarea1.completarTarea()

// Descompletar una tarea
tarea2.completarTarea()

// Agregar métodos para eliminar tareas si es necesario
