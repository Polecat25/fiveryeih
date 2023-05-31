import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { mok } from 'src/config/environments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private servicioG: GeneralService){}
  dataPosts:any
  spin:boolean = true
  ngOnInit(): void{
   //this.dataPosts = mok
    this.getData();
  }
  
  getData(){
    this.servicioG.get('/post').subscribe({
      next: (data)=>{
        this.dataPosts = data
        console.log(data);        
      },
      error: (error:any)=>{
          alert("no se pudieron cargar los datos")
      },
      complete: ()=>{
          this.spin = false
      }
    })
  }




  
}
