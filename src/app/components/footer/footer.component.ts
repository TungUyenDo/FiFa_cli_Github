import { Component, OnInit } from '@angular/core';
declare var $: any;

declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.fi-select__languages').click(function(e){
          e.preventDefault();
          $('.dropdown-menu').toggleClass('active')
      })

      // $('body').click(function(){
      //     $('.dropdown-menu').removeClass('active')
      // })
  }

}
