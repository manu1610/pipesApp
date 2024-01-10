import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'jesus';
  public nameUpper: string = 'JESUS';
  public fullName: string = 'jEsUs emAnUeL';

  public customDate: Date = new Date();
}
