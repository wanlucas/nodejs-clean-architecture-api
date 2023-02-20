import Skill from "../src/domain/entities/Skill";
import SkillRepository from "../src/domain/repositories/SkillRepository";
import CreateSkill from "../src/domain/useCases/CreateSkill";
import SkillRepositoryMemory from "../src/infra/repository/SkillRepositoryMemory";

it('Should create a test', async () => {
  const skillRepository = new SkillRepositoryMemory();
  const createSkill = new CreateSkill(skillRepository);
  const skill = await createSkill.execute();

  expect(skill).toBe(1);
});