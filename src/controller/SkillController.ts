import CreateSkill from "../domain/useCases/CreateSkill";
import GetSkills from "../domain/useCases/GetSkills";
import { IRequest, IResponse } from "./http";
import SkillRepository from "../domain/repository/SkillRepository";


export default class SkillController {
  private readonly _getSkills: GetSkills;
  private readonly _createSkill: CreateSkill;

  constructor(skillRepository: SkillRepository) { 
    this._getSkills = new GetSkills(skillRepository);
    this._createSkill = new CreateSkill(skillRepository);
  }

  getSkills = async (): Promise<IResponse> => {
    return { status: 200, payload: await this._getSkills.execute() };
  }

  createSkill = async ({ body }: IRequest): Promise<IResponse> => {
    return { status: 200, payload: await this._createSkill.execute(body) };
  }
}