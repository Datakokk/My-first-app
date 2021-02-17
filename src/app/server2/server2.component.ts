import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  serverNumber:number = 0;
  colorNumber:string = "black";

  constructor() { 
    this.serverNumber > 4 ? 'white' : 'black';
  }

  ngOnInit(): void {
  }

  getServerNumber(){
    return this.serverNumber+=1;
  }

  getColor(){
    return this.serverNumber > 4 ? 'blue': 'white';
  }
}
