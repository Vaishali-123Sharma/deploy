import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `
  //  <app-server></app-server>
  //  <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created previously';
  serverName = 'test';
  serverCreated = false;
  servers = ['Testserver', 'Test server 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.allowNewServer = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! name is '+ this.serverName;
  }
  onUpdateServerName(event: Event ){
  this.serverName = (<HTMLInputElement> event.target).value;
  }
}
