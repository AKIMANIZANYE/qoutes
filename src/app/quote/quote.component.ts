import { Component, OnInit } from '@angular/core';
import {Claudine} from '../claudine'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    Quote = [
        new Claudine("Stress",'Do not tress  yourself' ,'Akimanizanye' ,new Date(2018,3,14)),
        new Claudine("wisdom",'We seldom realize, for example that our most private thoughts and emotions are not actually our own. For we think in terms of languages and images which we did not invent, but which were given to us by our society.'
        ,'Alan Watts' ,new Date(2018,3,14)),
        new Claudine("knowlegde", 'The menu is not the meal.'
        ,'Alan Watts ',new Date(2018,3,14)),
        new Claudine("Names", 'Names have power.'
        ,'Rick Riordan, The Lightning Thief ',new Date(2018,3,14)),
        new Claudine("Answer", 'It ai not what they call you, its  what you answer to'
        ,'W.C. Fields',new Date(2018,3,14)),
        new Claudine("sharp", 'You used, he said, and then took a sharp breath, "to call me Augustus.'
      , 'John Green, The Fault in Our Stars ',new Date(2018,3,14)),
    ]
    toogleDetails(index){
      this.Quote[index].showPerson = !this.Quote[index].showPerson;
  }

  constructor() { }

  ngOnInit() {
  }
}

