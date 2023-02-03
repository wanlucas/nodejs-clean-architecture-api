import Skill from "../entity/Skill";
import SkillRepository from "../repository/SkillRepository";

export default class CreateSkill {
  constructor (private readonly _skillRepository: SkillRepository) { }

  async execute(input: any): Promise<number>  {
    const skill = new Skill(input);
    const output = await this._skillRepository.saveSkill(skill);

    return output;
  }
}