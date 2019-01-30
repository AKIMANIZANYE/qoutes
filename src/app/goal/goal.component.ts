


import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

 export class GoalComponent implements OnInit {
  goals = [
      new Goal('Quote about Stress','Anne','Do not stress yourself', 'Claudine',new Date(2019,1,12),0,0),
      new Goal('Motivation Quote', 'Alexia','Never giveup', 'Ciara',new Date(1993,8,4),0,0 ),
      new Goal( 'Courageous Quotes', 'Anneheyman','Try to fail but never fail to try', 'Claire', new Date(1998,9,4),0,0 ),
      new Goal( 'Women in Tech', 'cosntantine','“Life is a series of building, testing, changing and iterating.”', 'Maliza',new Date(1918,8,24) ),
      new Goal('Underreted Women', 'Alfred','“Trust in yourself, believe that your voice matters, and know that your words are good enough.”','Clemantine' ,new Date(1956,6,14),0,0 ),
      new Goal( 'Quote about believe','lilianne','“Love what you do and do what you love. " ', 'Clarisse', new Date(1997,9,14) ,0,0),

  ]
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)

}
  deleteGoal(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].quote
        }`)
        
        if(toDelete){
            this.goals.splice(index,1)
        }
    }
}

  completeGoal(isComplete,index){
    if (isComplete){
        this.goals.splice(index,1);
        }
        }
        
        toogleDetails(index){
          this.goals[index].showDescription = !this.goals[index].showDescription;
      }

        ngOnInit(){}
      }
     