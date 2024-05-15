import { Component, OnInit } from '@angular/core';
import { Decoration } from 'src/Models/Decoration';
import { DecorationService } from 'src/Services/decoration.service';

@Component({
  selector: 'app-decoration-tab',
  templateUrl: './decoration-tab.component.html',
  styleUrls: ['./decoration-tab.component.css']
})
export class DecorationTabComponent implements OnInit {
  decorations!: Decoration[];

  constructor(private decorationService: DecorationService) {}

  ngOnInit(): void {
    this.decorationService.getAll().subscribe((decorations: Decoration[]) => {
      this.decorations = decorations;
    });
  }

  // CRUD
}
