import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  inputValue = "";
  @Input() items = ["Apples"];
  @Output() addedItem = new EventEmitter<string>();

  constructor() { }

  onAddItem() {
    this.addedItem.emit(this.inputValue);
  }

  ngOnInit(): void {
  }

}
