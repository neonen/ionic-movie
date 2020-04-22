import { Component, OnInit } from '@angular/core';
import { NavParams, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {
  public filme;
  private filmeId;
  constructor(
    private navPar:ActivatedRoute,
    private loadingController:LoadingController,
    private movieProvider:MovieService
  ) { }

  ngOnInit() {
    this.filmeId = this.navPar.snapshot.paramMap.get('id');
    this.carregarFilmes(this.filmeId);
    
  }

  ionViewDidEnter() {
    // this.filmeId = this.navPar.snapshot.paramMap.get('id');
    // this.carregarFilmes(this.filmeId);
  }

  carregarFilmes(id){
    this.presentLoading();
    this.movieProvider.getMovieId(id)
    .subscribe(data =>  {
      let retorno = data as any;
      this.filme = retorno;
    },error =>{
      error;
    });
  }

  async presentLoading() {
    let loading = await this.loadingController.create({
      message: 'Por favor espere...'
    });
    await loading.present();
    await loading.dismiss();

  }

}
