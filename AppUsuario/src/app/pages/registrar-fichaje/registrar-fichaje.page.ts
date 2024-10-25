import { Component, OnInit } from '@angular/core';
import { FichajeService } from '../../services/fichaje.service';

@Component({
  selector: 'app-registrar-fichaje',
  templateUrl: './registrar-fichaje.page.html',
  styleUrls: ['./registrar-fichaje.page.scss'],
})
export class RegistrarFichajePage implements OnInit {
  trabajos: string[] = ['Trabajo 1', 'Trabajo 2', 'Trabajo 3']; // Lista de trabajos
  trabajoSeleccionado: string = ""; 
  fichajeAbierto: boolean = false;
  fichajeActual: any = {};

  constructor(private fichajesService: FichajeService) {}

  ngOnInit() {}

  iniciarFichaje() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.fichajeActual = {
          idTrabajo: this.trabajoSeleccionado,
          FechaHoraEntrada: new Date().toISOString(),
          FechaHoraSalida: null,
          horasTrabajadas: null,
          geolocalizacionLatitud: position.coords.latitude,
          geolocalizacionLongitud: position.coords.longitude
        };
        this.fichajeAbierto = true;
      }, error => {
        console.error('Error al obtener la geolocalización', error);
        // Manejar el error de geolocalización aquí si es necesario
      });
    } else {
      console.error('Geolocalización no soportada por el navegador');
      // Manejar el caso donde la geolocalización no está soportada
    }
  }

  finalizarFichaje() {
    this.fichajeActual.FechaHoraSalida = new Date().toISOString();
    const entrada = new Date(this.fichajeActual.FechaHoraEntrada);
    const salida = new Date(this.fichajeActual.FechaHoraSalida);
    this.fichajeActual.horasTrabajadas = (salida.getTime() - entrada.getTime()) / (1000 * 60 * 60); // Calcula las horas trabajadas

    this.fichajesService.addFichaje(this.fichajeActual).subscribe(
      data => {
        console.log('Fichaje agregado:', data);
        this.fichajeAbierto = false;
        this.fichajeActual = {};
      },
      error => {
        console.error('Error al agregar el fichaje', error);
      }
    );
  }
}