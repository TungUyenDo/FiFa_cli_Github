import { ApiServices } from './../../app.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-matches',
  templateUrl: './detail-matches.component.html',
  styleUrls: ['./detail-matches.component.scss', '../livecores.component.scss']
})
export class DetailMatchesComponent implements OnInit {

  data_livecores: any;
  res_livecores: any
  constructor(private apiservice: ApiServices) { }

  ngOnInit() {

    this.GetLiveCores()

  }
  GetLiveCores() {
    this.apiservice.getLiveCores().subscribe(res => {
      this.res_livecores = res;

      this.data_livecores = this.res_livecores.data;


      this.data_livecores.events.data.sort(function(a, b){
        return b.minute - a.minute
      })

      console.log(this.data_livecores)
    })
  }
}
