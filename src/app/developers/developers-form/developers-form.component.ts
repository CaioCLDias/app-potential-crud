import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Developer } from '../developer';
import { DevelopersService } from '../../developers.service'


@Component({
  selector: 'app-developers-form',
  templateUrl: './developers-form.component.html',
  styleUrls: ['./developers-form.component.css']
})
export class DevelopersFormComponent implements OnInit {

  dev: Developer;
  success: boolean = false
  errors: String[];
  id: number;
  constructor(
    private service: DevelopersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.dev = new Developer();
      this.errors = new Array<string>();
  }

  ngOnInit(): void {
    let params : Params = this.activatedRoute.params;
    this.dev.sexo = "M";
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.service
        .getDevById(this.id)
        .subscribe(
          response => this.dev = response,
          errorResponse => this.dev = new Developer()
        )
    }
  }

  saveDev() {
    if(this.id){
        console.log("dev: " + this.dev.dataNascimento);
        this.service
        .update(this.dev)
        .subscribe(response => {
          this.success = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atulaizar o dev']
        })
    }else{
      console.log("dev: " + this.dev.dataNascimento);
      this.service 
      .save(this.dev)
      .subscribe(response => {
        this.success = true;
        this.errors = new Array<string>();
        this.dev = response;
        console.log(response);
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })

    }
    
  }

  cancel() {
    this.router.navigate(["/developers-list"]);
  }

}
