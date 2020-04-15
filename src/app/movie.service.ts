import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private base_url = "https://api.themoviedb.org/3/";
  private key = "6df88bf9b0cc7c07a059b56adddc8d0a";
  private language="pt-BR";

  constructor(
    private http: HTTP,
    private httpCli: HttpClient,
    private plataforma:Platform
  ) { }

  service(url){
    return this.httpCli.get(url)
    
  }

  getMovie(){
    let url = `${this.base_url}movie/popular?api_key=${this.key}&language=${this.language}`;
    return this.service(url);
    //return this.http.get(url,{},{});
  }
}
