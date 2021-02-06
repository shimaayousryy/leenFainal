import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {Router} from '@angular/router'
=======
import { Router } from '@angular/router'
import { Contract } from './contract.model'
import { ContractService } from './contract.service';
import { Duration } from './duration.model'
import { Timing } from './time.model';
>>>>>>> a27b93b (update)


@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

<<<<<<< HEAD


  data:string;


  constructor(
     ) { }


  // goToCart(){
  //   this._Router.navigate(['home']);;
  //   localStorage.setItem('permission' , 'done')
  // }
  ngOnInit(): void {


  }
  /******************post contract method******************/

  /******************end post contract method******************/
=======
  // contract array
  contract: Contract[] = []
  contractObj: Contract = new Contract();

  // contract duration array
  durationList: Duration[] = [];
  durationObj: Duration = new Duration();
  delivery_duration: string;
  // contract time of delivary array
  timeList: Timing[] = [];
  timeObj: Timing = new Timing();


  constructor(public contractService: ContractService) { }

  ngOnInit(): void {
    // intialization of contract 
    this.contractObj = new Contract();
    // intialization contract duration 
    this.durationObj = new Duration();
    // intialization contract time of delivary 
    this.timeObj = new Timing();


    this.getDuration();
    this.getTime();

  }



  //post contract method
  createNewContract() {
    this.contractService.contractForm(this.contractObj).subscribe(res => {
      console.log(res)
    })
  }

  // get all duration
  getDuration() {
    this.contractService.getContractDuration().subscribe(res => {
      this.durationList = res
    })
  }
   // get all time
  getTime() {
    this.contractService.getContractTime().subscribe(res => {
      this.timeList = res
    })
  }

  // send duration selected
  fillDuration(duration: Duration) {
    this.contractObj.id = duration.id;
    this.contractObj.delivery_duration = duration.en_delivery_duration;
  }
   // send time selected
  fillTime(time: Timing) {
    this.contractObj.id = time.id;
    this.contractObj.delivery_timing = time.en_delivery_timing
  }

>>>>>>> a27b93b (update)

}
