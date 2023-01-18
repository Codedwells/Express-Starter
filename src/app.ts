import express, { NextFunction, Request, Response } from 'express';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware with carrying technique
const middleware = ({name}:{name:string}) => (req:Request,res:Response,next:NextFunction) =>{
    res.locals.name =name;
    next()
}

app.get('/', (req: Request, res: Response) => {
	return res.send('hello world');
});

app.post('/api/v1/data', (req: Request, res: Response) => {
	console.log(req.body);
});

app.get('api/v1/user',middleware({name:'Thomas'}), (req: Request<{name:string},{},{},{}>, res: Response) => {
	res.send(`The users name is ${res.locals.name}`);
});

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});
