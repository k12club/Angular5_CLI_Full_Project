import { Component, ViewEncapsulation } from '@angular/core';
import { IOption } from 'ng-select';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Profile } from '../../../pages/model/profile';
import { DataProfileService } from '../../../service/data-profile.service';

@Component({
  templateUrl: 'advanced-forms.component.html',
  styleUrls: [
    '../../../../scss/vendors/bs-datepicker/bs-datepicker.scss',
    '../../../../scss/vendors/ng-select/ng-select.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdvancedFormsComponent {

  // Angular 2 Input Mask

  public dateModel = '';
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  public phoneModel = '';
  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public taxModel = '';
  public taxMask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  public ssnModel = '';
  public ssnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public eyeScriptModel = '';
  public eyeScriptMask = ['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/];

  public ccnModel = '';
  public ccnMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];


  // Datepicker

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  // Timepicker

  public hstep: number = 1;
  public mstep: number = 15;
  public ismeridian: boolean = true;
  public isEnabled: boolean = true;

  public mytime: Date = new Date();
  public options: any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  public toggleMode(): void {
    this.ismeridian = !this.ismeridian;
  };

  public update(): void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  };

  public changed(): void {
    console.log('Time changed to: ' + this.mytime);
  };

  public clear(): void {
    this.mytime = void 0;
  };

  // ng2-select
  public countries: Array<IOption> = [
    { label: 'Belgium', value: 'BE' },
    { label: 'Luxembourg', value: 'LU' },
    { label: 'Netherlands', value: 'NL' }
  ];

  public selectedCountries: Array<string> = ['BE', 'NL'];


  profileFrom: Profile = { email: '', wallet: '', username: '', poolname: null };
  constructor(private service: DataProfileService
              
  ) {


  }



  submitprofile(profileFrom) {
    console.log(profileFrom);
    
    this.service.save(profileFrom).then(res => {
    console.log(res);

    })

  }
}
