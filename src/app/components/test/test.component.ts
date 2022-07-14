import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interface/pet';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  pets: Pet[] = [
    {name: "Fido", breed: 'German Sherpard'},
    {name: "Checkeres", breed: 'Cocker Spaniel'},
    {name: "Oreo", breed: 'Delmatian'},
    {name: "Diva", breed: 'Tabby'}
  ]

  singlePet: Pet = {name: "Jasper", breed: "Pitbull", price: 50};

  constructor() { }

  ngOnInit(): void {
  }

}
