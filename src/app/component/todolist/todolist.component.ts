import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../service/common.service'


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  keyWord: string = '';
  list: any[] = [];


  constructor(public store:CommonService) {

    var listN =this.store.get('todoList')

    if(listN){
      this.list=listN

    }
    this.store.get('todoList')
  }

  ngOnInit(): void {

  }
  handelSubmit(e: any) {
    if (e.keyCode == 13) {
      if (!this.filterDuplicateData(this.list, this.keyWord)) {

        this.list.push({
          title: this.keyWord,
          status: false
        })
        this.store.set('todoList',this.list)
        this.keyWord = ''


      }

        this.keyWord = ''
    }
  }
  handelDelete(key: any) {
    this.list.splice(key, 1)
    this.store.set('todoList',this.list)

  }
  filterDuplicateData(list: any, keyword: string) {
    // if (!keyword) return false;
    for (let i= 0; i < list.length;i++) {
      if (list[i].title == keyword) {
        return true
      }
    }
    return false;

  }
  checkboxChange(){
    this.store.set('todoList',this.list)
  }

}
