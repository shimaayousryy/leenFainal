import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { ContractService } from './contract.service'
import { Contract } from './contract.model'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  // Users signUp array
  contract: Contract[] = [];
  contractObj: Contract = new Contract();


  contractForm: FormGroup;

  constructor(private ContractService: ContractService) { }


  // goToCart(){
  //   this._Router.navigate(['home']);;
  //   localStorage.setItem('permission' , 'done')
  // }
  ngOnInit(): void {
    // init
    this.contractObj = new Contract();
    this.contractForm = new FormGroup({
      'start_date': new FormControl(null, [ Validators.required]),
      'end_date': new FormControl(null, [ Validators.required])
    })
  }
  /******************post contract method******************/
  contractData() {
    this.ContractService.contractForm(this.contractObj).subscribe(res => {

    })
  }
}
