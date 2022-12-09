import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from '../models/Registro';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;
  registro: Registro = new Registro();
  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formRegistro = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }


  ngOnInit() {
  }

  async salvarRegistro(){
    console.log('Formulário: ', this.formRegistro.valid);
    if(this.formRegistro.valid){
      this.registro.nome = this.formRegistro.value.nome;
      this.registro.email = this.formRegistro.value.email;
      await this.storageService.set(this.registro.nome, this.registro);
      alert('forms valido!');
    }
    else{
      alert('forms invalido!');
    }
  }
}
