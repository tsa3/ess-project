import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroService } from './cadastro/cadastro.service';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

import { MinhaContaComponent } from './minha_conta/minha_conta.component';
import { MinhaContaService } from './minha_conta/minha_conta.service';
import { NavbarComponent } from './navbar/navbar.component';

import { CriarTurmaComponent } from './criar_turma/criar_turma.component';
import { CriarTurmaService } from './criar_turma/criar_turma.service';

import { MinhasTurmasComponent } from './minhas_turmas/minhas_turmas.component';
import { MinhasTurmasService } from './minhas_turmas/minhas_turmas.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroComponent,
    LoginComponent,
    MinhaContaComponent,
    CriarTurmaComponent,
    MinhasTurmasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'cadastro',
        component: CadastroComponent
      },
    ]),
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
    ]),
    RouterModule.forRoot([
      {
        path: 'minha_conta',
        component: MinhaContaComponent
      },
    ]),
    RouterModule.forRoot([
      {
        path: 'criar_turma',
        component: CriarTurmaComponent
      },
    ]),
    RouterModule.forRoot([
      {
        path: 'minhas_turmas',
        component: MinhasTurmasComponent
      },
    ])
  ],
  providers: [CadastroService, LoginService, MinhaContaService, CriarTurmaService, MinhasTurmasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
