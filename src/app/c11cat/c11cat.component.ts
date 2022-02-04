import { Component, OnInit } from '@angular/core';
import { Cat } from '../interfaces/cat';


@Component({
  selector: 'app-c11cat',
  templateUrl: './c11cat.component.html',
  styleUrls: ['./c11cat.component.css']
})
export class C11catComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }
  categories:Cat[]=[
    {id:1,name:'laptop',desc:'description',img:'l1.jpg'},
    {id:2,name:'mobile',desc:'description',img:'m1.jpg'},
    {id:3,name:'shoes',desc:'description',img:'s1.jpg'},
    {id:4,name:'clothes',desc:'description',img:'c1.jpg'},
  ];
}
