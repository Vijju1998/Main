const express = require('express');

const connectdb = require('./config/db');

const app = express();
//Connect Database
connectdb();

//Init Middleware(Body Parser)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
/*app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/orders', require('./routes/api/orders'));
app.use('/api/items', require('./routes/api/items'));
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
