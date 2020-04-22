import { Injectable } from '@angular/core';
let key = "config";

@Injectable({
  providedIn: 'root'
})
export class ConfigProvider {
    private config = {
        show:false, 
        name:"",
        username:""
    }
  constructor() { }

  getConfigData():any{
    return localStorage.getItem(key) || {};
  }

  setConfigData(show?:boolean,name?:string,username?:string){
    let config = {
        show:false, 
        name:"",
        username:""
    }

    if(show)
        config.show = show;
    if(name)
        config.name = name;
    if(username)
        config.username = username;
        
    localStorage.setItem(key,JSON.stringify(config));
  }
}
