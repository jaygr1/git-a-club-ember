import DS from 'ember-data';

export default DS.Model.extend({
    // id: DS.attr('string'),
    condition: DS.attr('string'),
    generic_club_id: DS.attr('string'),
});
