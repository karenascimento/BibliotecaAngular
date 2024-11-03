import { Component } from '@angular/core';
@Component({
  selector: 'app-cadastros',
  standalone: true,
  templateUrl: './cadastros.component.html',
  styleUrl: './cadastros.component.css'
})
export class CadastrosComponent {
  constructor(){
    console.log("CadastrosComponent constructor")
  }
}
