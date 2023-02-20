import Skill from "../entities/Skill";
import SkillRepository from "../repositories/SkillRepository";

export default class GetSkills {
  constructor (private readonly _skillRepository: SkillRepository) { }

  async execute(): Promise<Skill[]>  {
    return this._skillRepository.getSkills();
  }
}