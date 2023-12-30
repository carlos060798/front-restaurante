import { format } from 'date-fns';

function formatearFecha(fecha: string) {
  try {
    const fechaObj = new Date(fecha);
    const fechaFormateada = format(fechaObj, 'dd/MM/yyyy');
    return fechaFormateada;
  } catch (error) {
    console.error('Error al formatear la fecha:', error);
    // Manejar el error según sea necesario
    return ''; // Otra opción podría ser devolver la fecha original sin formato
  }
}

export { formatearFecha }; 

