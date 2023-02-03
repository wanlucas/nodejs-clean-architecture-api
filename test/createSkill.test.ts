import Skill from "../src/domain/entity/Skill";
import SkillRepository from "../src/domain/repository/SkillRepository";
import CreateSkill from "../src/domain/useCases/CreateSkill";
import SkillRepositoryMemory from "../src/infra/repository/SkillRepositoryMemory";

it('Should create a test', async () => {
  const skillRepository = new SkillRepositoryMemory();
  const createSkill = new CreateSkill(skillRepository);
  const skill = await createSkill.execute();

  expect(skill).toBe(1);
});