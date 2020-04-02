import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular TNS CV';

  solvers=[
    {FirstName:'Angel',Surname:'Rios'},
    {FirstName:'Julian',Surname:'Zapata'},
    {FirstName:'Duvan',Surname:'Ignacio'}
  ]

  model:any={};

  addSolver():void{
    this.solvers.push(this.model);
  
  }

  deleteSolver():void{
  
  }
  editSolver():void{
  
  }
  updateSolver():void{
  
  }
}


