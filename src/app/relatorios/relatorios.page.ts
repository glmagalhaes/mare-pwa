import { Component, OnInit } from '@angular/core';
import { RelatorioNovoPage } from '../relatorio-novo/relatorio-novo.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.page.html',
  styleUrls: ['./relatorios.page.scss'],
})
export class RelatoriosPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async novoRelatorio() {
    const data = { message : 'hello world' };
    const modalPage = await this.modalController.create({
      component: RelatorioNovoPage,
      componentProps: {values: data}
    });

    return await modalPage.present();
  }

}
