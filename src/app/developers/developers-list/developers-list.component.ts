import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from '../developer';
import { DevelopersService } from '../../developers.service';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.css']
})
export class DevelopersListComponent implements OnInit {

  devs: Developer[] = [];
  dev: Developer;
  nome: string = "";
  message: string;
  error: string;
  constructor(
    private service: DevelopersService, 
    private router: Router) {}

  ngOnInit(): void {
   
      this.service
      .getDevs(this.nome)
      .subscribe(response => {
        this.devs = response
      });
    
   
  }
  
  newDev(){
    this.router.navigate(['/developers-form']);
  }

  getDev(dev: Developer){
    this.dev =dev;
  }
  deleteDev(){
    this.service
    .deleteDev(this.dev)
    .subscribe( 
      response => {this.message = "Dev deletado com sucesso" ,
      this.ngOnInit()
    },
      erro => this.error = "Erro ao deletar o dev" )
  }

  consultar(){
      this.ngOnInit();
    }
}
