const password = 'uq5twyzE4lt7NyAq';
const database = 'weight-tracker-data';

module.exports = {
  mongoURI: `mongodb+srv://john:${password}@weight-tracker-data.cjawu.mongodb.net/${database}?retryWrites=true&w=majority`,
};
