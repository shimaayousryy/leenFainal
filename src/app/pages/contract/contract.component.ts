import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { ContractService } from './contract.service'
import { Contract } from './contract.model';
import { Timing } from './time.model'
import { Duration } from './duration.model'
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  // contract array
  contract: Contract[] = [];
  contractObj: Contract = new Contract();

  // Timing array
  timeList: Timing[] = [];
  timeObj: Timing = new Timing();
 timeStr :string;
  // Timing array
  duration: Duration[] = [];
  durationObj: Duration = new Duration();
  dutationStr :string;
  contractForm: FormGroup;
 

  constructor(private ContractService: ContractService , private _Router:Router) { }



  ngOnInit(): void {
    // init
    this.contractObj = new Contract();
    this.timeObj = new Timing();
    this.durationObj = new Duration();

    this.getTime();
    this.getDuration();
    this.contractForm = new FormGroup({
      'start_date': new FormControl(null, [Validators.required]),
      'end_date': new FormControl(null, [Validators.required])
    })

  }
  /******************post contract method******************/
  contractData() {
    this.ContractService.contractForm(this.contractObj).subscribe(res => {
      this._Router.navigate(['/home'])

    })
  }

  getTime() {
    this.ContractService.getContractTime().subscribe(res => {
      this.timeList = res
    })
  }
  // get time to send to api
  fillTime(timeVal: Timing) {
    this.contractObj.delivery_timing = timeVal.en_delivery_timing;
    this.timeStr = timeVal.en_delivery_timing;
  }
  getDuration() {
    this.ContractService.getContractDuration().subscribe(res => {
      this.duration = res
    })
  }
  // get duration to send to api
  fillDuration(durationVal: Duration) {
    this.contractObj.delivery_duration = durationVal.en_delivery_duration;
    this.dutationStr = durationVal.en_delivery_duration;
  }
}
