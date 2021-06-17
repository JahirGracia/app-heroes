import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from "rxjs/operators";
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 20px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  // idHeroe: string = "";

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.params.pipe(map(p => p.id)));

    //Dos formas de hacerlo
    this.activatedRoute.params
      .pipe(
        switchMap( (resp) =>  this.heroesService.getHeroePorId(resp.id))
      )
      .subscribe((resp) => {
        this.heroe = resp;
        console.log(resp.id);
        // this.idHeroe = resp.id;
        // this.imprimirIdHeroe(this.idHeroe);
      });

    // this.activatedRoute.params
    //   .subscribe( ({ id } ) => console.log(id));
  }

  //Esto sólo lo hice para una prueba
  // imprimirIdHeroe(idHeroe: string): void {
  //   console.log('Imprimir Heroe desde método:', idHeroe);
  // }

  regresarListado() {
    this.router.navigateByUrl('heroes/listado');
  }

}
