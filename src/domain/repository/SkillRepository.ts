import Skill from "../entity/Skill";

export default interface SkillRepository {
  saveSkill(skill: Skill): Promise<number>
  getSkills(): Promise<Skill[]>
}