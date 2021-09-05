import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../common/Skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
