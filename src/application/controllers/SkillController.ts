import CreateSkill from "../../domain/useCases/CreateSkill";
import GetSkills from "../../domain/useCases/GetSkills";
import { Handler, Request, Response } from "../interfaces/http";

export default class SkillController {
  constructor(
    private _getSkills: GetSkills,
    private _createSkill: CreateSkill
  ) { }

  getSkills = async (_request: Request, handler: Handler): Promise<Response> => {
    return handler.status(200).payload(await this._getSkills.execute());
  }

  createSkill = async ({ body }: Request, handler: Handler): Promise<Response> => {
    return handler.status(201).payload(await this._createSkill.execute(body));
  }
}