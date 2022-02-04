import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prod } from '../interfaces/prod';
@Component({
  selector: 'app-c12prod',
  templateUrl: './c12prod.component.html',
  styleUrls: ['./c12prod.component.css']
})
export class C12prodComponent implements OnInit {
//Emp e1=new Emp();
//private e1:Emp
catid!:number;
  constructor(private ar:ActivatedRoute) 
  { 

    this.catid=this.ar.snapshot.params['id'];


   }

  ngOnInit(): void {
  }
  products:Prod[]=[
    {pid:1,catid:1,name:'dell',img:'l1.jpg',desc:'description',price:15000,qty:100,rating:5},
    {pid:2,catid:1,name:'sony vaio',img:'l2.jpg',desc:'description',price:25000,qty:100,rating:5},
    {pid:3,catid:2,name:'apple',img:'m1.jpg',desc:'description',price:35000,qty:100,rating:5},
    {pid:4,catid:2,name:'samsung',img:'m2.jpg',desc:'description',price:45000,qty:100,rating:5},
    {pid:5,catid:3,name:'nike',img:'n1.jpg',desc:'description',price:55000,qty:100,rating:5},
    {pid:6,catid:3,name:'puma',img:'n2.jpg',desc:'description',price:65000,qty:100,rating:5},
    {pid:7,catid:4,name:'levis',img:'c1.jpg',desc:'description',price:75000,qty:100,rating:5},
    {pid:8,catid:4,name:'lnp',img:'c2.jpg',desc:'description',price:85000,qty:100,rating:5}
  ];
}
