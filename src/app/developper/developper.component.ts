import { Component, OnInit } from '@angular/core';
import { Developper } from '../common/Developper.model';
import { Skill } from '../common/Skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {

  developper : Developper | undefined;

  constructor() {
   }

  ngOnInit(): void {
    this.developper = new Developper ( "Dupond", "Jean", 26,"M",[
      new Skill("js","logoJs","js.com"),
      new Skill("ng","logoNg","ng.com"),
      new Skill("java","logoJava","java.com"),
      ]
    )
  }

}
