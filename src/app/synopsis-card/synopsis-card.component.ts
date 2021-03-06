import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-synopsis-card',
  templateUrl: './synopsis-card.component.html',
  styleUrls: ['./synopsis-card.component.scss']
})

/**
 * This gives the details of a particular movie
 */
export class SynopsisCardComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
     Title: string,
     ImagePath: any,
     Description: string,
     Genre: string,
    }
  ) { }

  ngOnInit(): void {
  }

}
