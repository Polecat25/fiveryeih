import { Component, Input } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  dataPosts:any
  @Input() dataFromPost: any
  ngOnInit(): void{
     //
  
     
   }

}
