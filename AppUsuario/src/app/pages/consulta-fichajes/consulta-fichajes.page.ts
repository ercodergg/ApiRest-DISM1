import { Component, OnInit } from '@angular/core';
import { FichajeService } from '../../services/fichaje.service';

@Component({
  selector: 'app-consulta-fichajes',
  templateUrl: './consulta-fichajes.page.html',
  styleUrls: ['./consulta-fichajes.page.scss'],
})
export class ConsultaFichajesPage implements OnInit {
  fichajes: any[] = [];

  constructor(private fichajesService: FichajeService) {}

  ngOnInit() {
    this.fichajesService.getFichajes().subscribe(
      data => {
        console.log('Datos recibidos:', data); // Inspecciona los datos recibidos
        this.fichajes = data;
      },
      error => {
        console.error('Error al obtener los fichajes', error);
      }
    );
  }
}