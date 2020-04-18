import { Injectable } from '@angular/core';

let configKeyName = "config";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config = {
    showSlide: false,
    name: "",
    userName: ""
  }

  constructor() { }

  // Recupera os dados do localStorage
  getConfigData(): any{
    return localStorage.getItem(configKeyName);
  }

  // Grava os dados no localStorage
  setConfigData(showSlide?: boolean, name?:string, userName?:string){
    let config = {
      showSlide: false,
      name: "",
      userName: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(userName){
      config.userName = userName;
    }

    localStorage.setItem(configKeyName, JSON.stringify(config));
  }
}
