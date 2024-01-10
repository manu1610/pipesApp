import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';
import internal from 'stream';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Jesus';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Pam';
    this.gender = 'female'
  }

  // i18nPlural
  public clients: string[] = ['Jesus', 'Emanuel', 'Magali', 'Karen', 'Fernando', 'Karla', 'Pilar', 'Henry'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue
  public person = {
    name: 'Jesus',
    age: 23,
    address: '37 Main Street',
  }

  //Async
  public myObservableTime =  interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  );

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })
}
