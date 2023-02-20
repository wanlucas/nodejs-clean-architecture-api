import fastify from "fastify";
import SkillRouter from "./routers/SkillRouter";

const app = fastify({ logger: true });

app.register(SkillRouter.create());

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Servidor rodando em ${address}`)
})