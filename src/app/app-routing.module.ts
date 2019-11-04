import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {ListarFilmesComponent} from './filme/listar-filmes/listar-filmes.component';
import {InserirFilmesComponent} from './filme/inserir-filmes/inserir-filmes.component';
import {UpdateFilmesComponent} from './filme/update-filmes/update-filmes.component';
import {ListarFuncionarioComponent} from './funcionario/listar-funcionario/listar-funcionario.component';
import {InserirFuncionarioComponent} from './funcionario/inserir-funcionario/inserir-funcionario.component';
import {UpdateFuncionarioComponent} from './funcionario/update-funcionario/update-funcionario.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listar-filmes', component: ListarFilmesComponent},
  {path: 'inserir-filmes', component: InserirFilmesComponent},
  {path: 'update-filmes/:idf', component: UpdateFilmesComponent},
  {path: 'listar-funcionarios', component: ListarFuncionarioComponent},
  {path: 'inserir-funcionarios', component: InserirFuncionarioComponent},
  {path: 'update-funcionarios/:id', component: UpdateFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
