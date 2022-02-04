import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/interfaces/cat';


@Component({
  selector: 'app-c18info',
  templateUrl: './c18info.component.html',
  styleUrls: ['./c18info.component.css']
})
export class C18infoComponent implements OnInit {
  categories:Cat[]=[
    {id:1,name:'laptop',desc:'description',img:'l1.jpg'},
    {id:2,name:'mobile',desc:'description',img:'m1.jpg'},
    {id:3,name:'shoes',desc:'description',img:'s1.jpg'},
    {id:4,name:'clothes',desc:'description',img:'c1.jpg'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
