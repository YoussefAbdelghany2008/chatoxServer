const Express = require('express');
const App = Express();


const cors = require('cors');
App.use(cors());

App.use(Express.urlencoded({ extended: true }));
App.use(Express.json());

// ============= connecting to db ======== //
const DB = 'chatox';
const PASSWORD = 'K6iYVzSPucBL18sO';
const Uri = `mongodb+srv://youssefabdelghany:${PASSWORD}@cluster0.p1e6ydp.mongodb.net/${DB}?retryWrites=true&w=majority&appName=Cluster0`;

const Mongoose = require('mongoose');
Mongoose.connect(Uri);



// =========================== //
// ========== Users ========== //
// =========================== //

const UserModel = require('./models/Users.js');

App.get('/users',async (req, res) => {  res.json(await UserModel.find()) });

App.post('/users', async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
});

// ============================== //
// ========== Messages ========== //
// ============================== //

const MessageModel = require('./models/Messges.js');

App.get('/messages', async (req,res) => {  res.json( await MessageModel.find() ) });

App.post('/messages', async (req,res) => {
    const Message = req.body;
    const NewMessage = new MessageModel(Message);
    await NewMessage.save();
    res.json(Message);
});





const PORT = process.env.PORT || 3000;
App.listen(PORT, () => { console.log(`http://localhost:${PORT}/`)});