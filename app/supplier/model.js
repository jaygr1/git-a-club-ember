import DS from 'ember-data';

export default DS.Model.extend({
  supplier: DS.attr('user')
});
