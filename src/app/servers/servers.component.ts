import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  /*template: `
            <p>servers works!2</p>
            <app-server></app-server>
            <app-success-alert></app-success-alert>
            <app-warning-alert></app-warning-alert>
            <app-saludos></app-saludos>
           `*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName ='Testserver2';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  /***************************************/
  name = 'Nando';

  /***************************************/
  serverName2 = '';
  contentPassword = 'Tuna';
  paragraphCreated = false;
  servers2 = [];
 

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    //this.serverName = (event.target as HTMLInputElement).value; valido debido a que en reacto no es posible usar <>
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  showParagraph(){
    this.paragraphCreated = !this.paragraphCreated;
    this.servers2.push(this.servers2.length + 1);
  }
}
