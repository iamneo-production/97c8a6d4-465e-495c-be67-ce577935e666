import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IMenu } from './Model/MenuTask';


@Component({
  selector: 'app-delete-menu',
  templateUrl: './delete-menu.component.html',
  styleUrls: ['./delete-menu.component.css']
})
export class DeleteMenuComponent implements OnInit {

  menuForm !: FormGroup;
  menus: IMenu [] = [];
  inprogress: IMenu [] = [];
  done: IMenu [] = [];

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.menuForm = this.fb.group({
      item : ['',Validators.required]
    })
  }
  addMenu(){
    this.menus.push({
      description:this.menuForm.value.item,
      done:false
    })
  }
  daleteMenu() {
    this.menus.splice(1)

  }
  drop(event: CdkDragDrop<IMenu[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}