import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class HeroeTarjetaComponent implements OnInit {

  //@Input se utiliza para enviar desde el formulario de otro componente
  @Input () heroe!: Heroe; //El "!" significa que siempre va a recibir un valor
  // @Input () heroe: Heroe | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
