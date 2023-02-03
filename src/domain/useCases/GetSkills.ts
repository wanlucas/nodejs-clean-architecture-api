import Skill from "../entity/Skill";
import SkillRepository from "../repository/SkillRepository";

export default class GetSkills {
  constructor (private readonly _skillRepository: SkillRepository) { }

  async execute(): Promise<Skill[]>  {
    return this._skillRepository.getSkills();
  }
}