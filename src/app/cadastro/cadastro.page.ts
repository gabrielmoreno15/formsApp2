import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from '../models/Cadastro';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;
  cadastro: Cadastro = new Cadastro();

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      validade: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      preco: ['', Validators.compose([Validators.required, Validators.maxLength(8)])]
    });
  }

  ngOnInit() {
  }

  async salvarCadastro(){
    console.log('Formulário: ', this.formCadastro.valid);
    if(this.formCadastro.valid){
      this.cadastro.nome = this.formCadastro.value.nome;
      this.cadastro.descricao = this.formCadastro.value.descricao;
      this.cadastro.validade = this.formCadastro.value.validade;
      this.cadastro.preco = this.formCadastro.value.preco;
      await this.storageService.set(this.cadastro.nome, this.cadastro);
      alert('forms valido!');
    }
    else{
      alert('forms invalido!');
    }
  }

}
