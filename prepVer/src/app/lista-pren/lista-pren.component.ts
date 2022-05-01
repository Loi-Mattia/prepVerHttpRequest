import { Component, OnInit,Input } from '@angular/core';
import { Booking } from '../booking.model';
import { Room } from '../rooms.model';
@Component({
  selector: 'app-lista-pren',
  templateUrl: './lista-pren.component.html',
  styleUrls: ['./lista-pren.component.css']
})
export class ListaPrenComponent implements OnInit {
  @Input() listaPreno :Booking[] = undefined!;
  @Input() room: Room = undefined!;

  constructor() { }
  
  ngOnInit(): void {
  }
  mostraDati(room:Room){
    this.room.id = room.id;
    this.room.name = room.name;
    this.room.num_D_bed = room.num_D_bed;
    this.room.num_S_bed = room.num_S_bed;
  }

}
