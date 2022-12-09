import { Component } from '@angular/core';
import { Cadastro } from '../models/Cadastro';
import { Registro } from '../models/Registro';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaCadastro: Cadastro[] = [];
  listaRegistro: Registro[] = [];

  constructor(private storageService: StorageService) {}

  async buscarCadastro(){
    this.listaCadastro = await this.storageService.getAll();
  }

  async buscarRegistro(){
    this.listaRegistro = await this.storageService.getAll();
  }

  ionViewDidEnter() {
    this.buscarCadastro();
    this.buscarRegistro();
  }
}
