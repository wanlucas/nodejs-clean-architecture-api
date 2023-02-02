import SkillRepository from "../../domain/repository/SkillRepository";
import CreateSkill from "../../domain/useCase/CreateSkill";
import GetSkills from "../../domain/useCase/GetSkills";
import { IRequest, IResponse } from "../interface/http";


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