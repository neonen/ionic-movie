import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../movie.service';
import { LoadingController, NavController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers:[
    MovieService
  ]
})
export class FeedPage implements OnInit {
  @ViewChild(IonInfiniteScroll,null) infiniteScroll: IonInfiniteScroll;

  public objeto = {
    nome:"CArlos",
    titulo:"Meu Post",
    conteudo:"Bom dia!",
    imagem:"assets/images/feed_img.jpg",
  }
  public lista_filmes = new Array<any>();
  public loading;
  private refresh;
  private isRefresh = false;
  public page = 1;

  constructor(
    private movieProvider:MovieService,
    private loadingController:LoadingController,
    private navCtr:NavController ,
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  carregarFilmes(newPage:boolean = false){
    this.presentLoading();
    this.movieProvider.getMovie(this.page)
    .subscribe(data =>  {
      let retorno = data as any;
      if(newPage)
        this.lista_filmes = this.lista_filmes.concat(retorno.results);  
      else
        this.lista_filmes = retorno.results;
      if(this.isRefresh){
        this.refresh.target.complete();
      }
    },error =>{
      error;
    });
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Por favor espere...'
    });
    await this.loading.present();
    await this.loading.dismiss();

  }


  doRefresh(event) {
    this.refresh = event;
    this.isRefresh = true;
    this.carregarFilmes();
  }

  abrirDetalhes(filme){
    this.navCtr.navigateForward(['/detalhe/'+filme]);
  }

  loadData(event) {
    this.page++;
    this.carregarFilmes(true);
    event.target.complete();
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}