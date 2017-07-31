import Ember from "ember";

export default Ember.Component.extend({
  classNames: [ 'off-canvas', 'in-canvas-for-large', 'position-left' ],

  didInsertElement() {
    this.$().attr( 'data-off-canvas', '' );
    new Foundation.OffCanvas( this.$() );
  }
});
