import { Carro } from './../../domain/carro/carro';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { EscolhaPageComponent } from './../escolha/escolha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public carros: Carro[];

  constructor(
    public navCtrl: NavController,
    private _http: Http,
    private _loading: LoadingController,
    private _alert: AlertController
  ) { }

  ngOnInit(): void {
    let loader = this._loading.create({ //metodo para criação das propriedades do loader
      content: 'C A R R E G A N D O'
    });
    loader.present(); //chamada do loader

    this._http.get('https://aluracar.herokuapp.com/')
      .map(res => res.json())
      .toPromise()
      .then(carros => {
        this.carros = carros;
        loader.dismiss() // se carregado , escode o loader
      })
      .catch(err => {
        console.log(err);
        loader.dismiss(); //chamada do loader novamente caso um erro aconteça ele some para o alert aparecer

        this._alert.create({
          title: 'Falha na conexao',
          buttons: [{ text: 'Estou ciente' }],
          subTitle: 'Nao foi possivel obter a lista de carros, tente mais tarde...'
        }).present();
      })
  }

  // router semelhante ao router do ang 2, mas a adicão de novos componentes tem comportamento de pilha, quando clicado no back button os itens da pilha vao sendo retirados, junto com a rota de parametro um objeto javascript é passado e a propriedade dessa chave para que o acesso ao objeto seja feita de forma simples.
  
  seleciona(carro) {
    this.navCtrl.push(EscolhaPageComponent, { carroSelecionado: carro })
  }

}