import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers:[
    MovieService
  ]
})
export class FeedPage implements OnInit {
  public objeto = {
    nome:"CArlos",
    titulo:"Meu Post",
    conteudo:"Bom dia!",
    imagem:"assets/images/feed_img.jpg",
  }
  public lista_filmes = new Array<any>();

  constructor(private movieProvider:MovieService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.movieProvider.getMovie()
    .subscribe(data =>  {
      let retorno = data as any;
      this.lista_filmes = retorno.results;
    },error =>{
      error;
    });
  }

  public numero(num:number):void{
    alert(num);
  }
}
