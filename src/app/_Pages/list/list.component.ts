import { Component } from '@angular/core';
import {Note} from '../../_models/note.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    NgForOf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  notes: Note [] = [
    new Note(1 , 'test', 'Desk test'),
    new Note(2 , 'test 2', 'Desk test 2'),
    new Note(3 , 'test 3', 'Desk test 3'),
    new Note(4 , 'test 4', 'Desk test 4')
  ]
}
