import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.fi-select__languages').click(function(e){
            e.preventDefault();
            $('.dropdown-menu').toggleClass('active')
      })


  }

}
