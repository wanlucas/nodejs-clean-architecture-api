import Skill from "../../domain/entities/Skill";
import SkillRepository from "../../domain/repositories/SkillRepository";

export default class SkillRepositoryMemory implements SkillRepository {
  public readonly skills = [
    { id: 1, entirety: 1,  name: 'Typescript', xp: 100 },
    { id: 2, entirety: 1,  name: 'Node.JS', xp: 200 },
    { id: 3, entirety: 1,  name: 'MySQL', xp: 120 },
  ];
  
  constructor() { }

  async getSkills(): Promise<Skill[]> {
    return this.skills;
  }

  async saveSkill(skill: Skill): Promise<number> {
    const id = this.skills.length + 1;
    this.skills.push(({ ...skill, id }));

    return id;
  }
}