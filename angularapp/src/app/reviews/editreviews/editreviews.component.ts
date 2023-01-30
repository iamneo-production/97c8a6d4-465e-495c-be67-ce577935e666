import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editreviews',
  templateUrl: './editreviews.component.html',
  styleUrls: ['./editreviews.component.css']
})
export class EditreviewsComponent implements OnInit {

  @Input() data:any;
  viewsService: any;
  constructor(private viewService:DeleteviewsService) { }

  ngOnInit(): void {}
  
  deletevi(){
    var confirm=window.confirm("Are you sure you want to edit views ?");
    if(confirm){
      this.viewsService.deleteTheme(this.data).subscribe((views:any)=>
      {
     console.log("edited");
      });
      location.reload();
    }
  }

}