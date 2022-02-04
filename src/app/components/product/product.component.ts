import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   myFiles: string[] = [];
   urlArray: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  onfileselect(data: any){
    this.myFiles = [];
    this.urlArray = [];
     this.myFiles = data;
     data.forEach((element: any) => {
       var reader = new FileReader();
       console.log(reader)
       reader.readAsDataURL(element);
       reader.onload = (event) => {
        this.urlArray.push(reader.result);
        console.log("urlarray", this.urlArray);
       }
     });

  }

  removeImage(){
    this.myFiles = [];
    this.urlArray = [];
  }

}
