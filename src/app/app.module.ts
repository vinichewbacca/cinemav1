import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ListarFilmesComponent } from './filme/listar-filmes/listar-filmes.component';
import { InserirFilmesComponent } from './filme/inserir-filmes/inserir-filmes.component';
import { UpdateFilmesComponent } from './filme/update-filmes/update-filmes.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ListarFuncionarioComponent } from './funcionario/listar-funcionario/listar-funcionario.component';
import { InserirFuncionarioComponent } from './funcionario/inserir-funcionario/inserir-funcionario.component';
import { UpdateFuncionarioComponent } from './funcionario/update-funcionario/update-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarFilmesComponent,
    InserirFilmesComponent,
    UpdateFilmesComponent,
    ListarFuncionarioComponent,
    InserirFuncionarioComponent,
    UpdateFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
