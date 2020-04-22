import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigProvider } from './config/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[
    ConfigProvider
  ]
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private configProvider:ConfigProvider,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let config = this.configProvider.getConfigData();
      if(config == null){
        this.configProvider.setConfigData(false);
        this.router.navigateByUrl('/')
      }else{
        this.router.navigateByUrl('/tabs')
      }

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
