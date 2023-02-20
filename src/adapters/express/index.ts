import express from 'express';
import tasksRouter from './routers/SkillRouter';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(tasksRouter.create());

app.listen(port, () => console.log('Connected'));