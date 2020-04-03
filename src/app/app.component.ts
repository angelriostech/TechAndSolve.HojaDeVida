import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string = 'Angular TNS CV';

  msg:string = '';

  solvers=[
    {IdCard:2113231,FirstName:'Angel', SecondName:"Stward", Surname:'Rios', SecondSurname:"Sanchez"},
    {IdCard:1111,FirstName:'Julian', SecondName:"Tech", Surname:'Zapata', SecondSurname:"Solve"},
    {IdCard:2222,FirstName:'Duvan', SecondName:"Ignacio", Surname:'Tech', SecondSurname:"Solve"}
  ]

  model:any={    

  };

  addSolver():void{
    this.solvers.push(this.model);
    console.log(this.model)
    
  
  }

  deleteSolver(i):void{
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.solvers.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }
  editSolver(i):void{
    this.model=this.solvers[i]
      
  
  }
  updateSolver():void{
  
  }

  closeAlert():void {
    this.msg = '';
  }
}


