const app = require('express')();
const apiRoutes = require('./routes');
const publicRoutes = require('./routes/publicRoutes');
const PORT = 3001;
//express routing
app.use('/api', apiRoutes);
app.use('/', publicRoutes);

app.listen(PORT, () => {
  console.log('Server Listening on : '+ PORT)
});