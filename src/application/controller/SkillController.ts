import CreateSkill from "../../domain/useCases/CreateSkill";
import GetSkills from "../../domain/useCases/GetSkills";
import { IRequest, IResponse } from "../interfaces/http";

export default class SkillController {
  constructor(
    private _getSkills: GetSkills,
    private _createSkill: CreateSkill
  ) { }

  getSkills = async (): Promise<IResponse> => {
    return { status: 200, payload: await this._getSkills.execute() };
  }

  createSkill = async ({ body }: IRequest): Promise<IResponse> => {
    return { status: 200, payload: await this._createSkill.execute(body) };
  }
}