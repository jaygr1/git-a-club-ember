import DS from 'ember-data';

export default DS.Model.extend({
  start_date: DS.attr('string'),
  finish_date: DS.attr('string'),
  price: DS.attr('string'),
  active: DS.attr('boolean')
});
