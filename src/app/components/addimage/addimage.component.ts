import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.scss']
})
export class AddimageComponent implements OnInit {
  myFiles: string[] = [];
  imageName: string | undefined;
  @Output() product = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  image(event: any){
    this.myFiles = [];
      for(var i=0;i<event.target.files.length;i++){
           if(event.target.files[i].size < 204800){
               this.myFiles.push(event.target.files[i]);
           }else{
             document.write("Please select image less than 2Mb");
           }
      }
      this.product.emit(this.myFiles);
  }

}
