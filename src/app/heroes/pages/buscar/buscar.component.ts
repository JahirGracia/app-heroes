import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';

  heroes: Heroe[] = [];

  heroeSeleccionado: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe ( (resp) => {
        this.heroes = resp;
      });
  }

  opcionSeleccionada(event: any) {
    // console.log(event);
    // console.log(event.option.value.superhero);
    if(!event.option.value) {
      console.log('No hay valor');
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    console.log(heroe);

    

    this.termino = heroe.superhero;
    
    this.heroesService.getHeroePorId (heroe.id!)
      .subscribe( (resp)  => {
        this.heroeSeleccionado = resp;
      });
  }
}
