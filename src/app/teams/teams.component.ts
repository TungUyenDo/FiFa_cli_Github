import { ApiServices } from './../app.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  data_team: any;
  list_team: any;

  list_team_arr : any

  constructor(private service: ApiServices) { }

  ngOnInit() {

    this.GetTeams()

  }

  GetTeams(){
      this.service.getTeams().subscribe(res => {
          this.data_team = res;
          this.list_team = this.data_team.data.items;

        localStorage.setItem('list_team_arr', JSON.stringify( this.data_team.data));
          
      })
  }


}
