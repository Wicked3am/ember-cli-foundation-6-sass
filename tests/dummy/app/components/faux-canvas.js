import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement() {
    new Foundation.OffCanvas( this.$().children().first() );
  }
});
