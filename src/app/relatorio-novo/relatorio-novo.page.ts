import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-relatorio-novo',
  templateUrl: './relatorio-novo.page.html',
  styleUrls: ['./relatorio-novo.page.scss'],
})
export class RelatorioNovoPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }
}
