const disneyAdultCtlr = require('../controllers/disney_adults');

// GET '/' - list all disney adults
app.get('/', disneyAdultCtlr.index);

// GET '/:id' - detail page for disney adult
app.get('/:id', disneyAdultCtlr.show);

// POST '/:id' - create and add new item to a disney adult
app.post('/:id', disneyAdultCtlr.create);