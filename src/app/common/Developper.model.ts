import { Skill } from "./Skill.model";

export class Developper {
  lastName : String;
  firstName: String;
  age : number;
  sexe: String;
  skills: Skill[];

  constructor(lastName:string, firstName:String, age:number, sexe:String, skills:Skill[] ) {
    this.lastName = lastName;
    this.firstName= firstName;
    this.age = age;
    this.sexe= sexe;
    this.skills= skills;
  }
}
