import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowUser = false;
serverCreation = "No server yet started";
serverName = 'Angular5';
servervar = false;
servers = ['Testserver','Testserver2'];
  constructor() { 
    setTimeout(() => {
      this.allowUser = true;
    }, 3000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.servervar = true;
    this.servers.push(this.serverName);
this.serverCreation = "The Server Starts Soon....! Name is " + this.serverName;

  }
  onInputUpdate(event:Event){
    // console.log(event);
    
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
