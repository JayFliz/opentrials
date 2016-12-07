const fixtures = {
  getCondition: require('./conditions'),
  getPerson: require('./persons'),
  getSource: require('./sources'),
  getOrganisation: require('./organisations'),
  getIntervention: require('./interventions'),
  getTrial: require('./trials').getTrial,
  getRecord: require('./trials').getRecord,
  searchTrialsByEntity: require('./trials').searchTrialsByEntity,
  getLocation: require('./locations'),
  getPublication: require('./publications'),
  getStats: require('./stats'),
  getFDADocument: require('./fda_documents'),
}

module.exports = fixtures;
