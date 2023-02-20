import Skill from "../entities/Skill";

export default interface SkillRepository {
  getSkills(): Promise<Skill[]>;
  saveSkill(skill: Skill): Promise<number>;
}