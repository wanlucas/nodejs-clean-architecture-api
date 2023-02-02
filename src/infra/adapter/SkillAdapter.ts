import Skill from "../../domain/entity/Skill";

export default class SkillAdapter {
  static create(entirety: number, name: string, xp: number): Skill {
    return new Skill({ entirety, name, xp });
  }
}