import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Funcionario} from '../funcionario';
import {FuncionarioService} from '../funcionario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Observable<Funcionario[]>; /*uma observable de uma coleção de funcionarios*/
  constructor(private funcionarioService: FuncionarioService, private rota: Router) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.funcionarios = this.funcionarioService.getFuncionarioList();
  }

  deletaFuncionario(id: number) {
    this.funcionarioService.delFuncionario(id).subscribe(data => {console.log(data);
      this.carregaDados(); }, error => console.log(error));
  }

  atualizaFuncionario(id: number) {
    this.rota.navigate(['update-funcionarios', id]);
  }
}
