import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
    this.goToPage("perfil")
  }

  goToPage(pagina){
    this.navCtrl.navigateForward("tabs/config/"+pagina);
  }
}
