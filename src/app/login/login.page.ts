import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../models/Login';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  login: Login = new Login();

  constructor(private formBuilder: FormBuilder, private storageService: StorageService) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit() {
  }

  async salvarLogin(){
    console.log('Formulário: ', this.formLogin.valid);
    if (this.formLogin.valid){
      this.login.email = this.formLogin.value.email;
      await this.storageService.set(this.login.email, this.login);
      alert('forms valido!');
    }
    else{
      alert('forms nao valido!');
    }
  }
}
