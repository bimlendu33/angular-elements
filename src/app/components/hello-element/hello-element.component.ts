import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-element',
  template: '<h3>Kaaaa re </h3>',
  styleUrls: ['./hello-element.component.scss']
})
export class HelloElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
