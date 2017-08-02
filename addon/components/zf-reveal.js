import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Ember.Component.extend(zfWidget, {

  /** @member Class names */
  classNames: ['reveal'],

  /** @member Attribute bindings */
  attributeBindings: ['data-reveal', 'data-animation-in', 'data-animation-out'],

  /** @member Makes the data attribute binding appear */
  'data-reveal': ' ',

  'overlay': true,

  /** @member Foundation type */
  'zfType': 'Reveal',

  /** @member Foundation specific options */
  'zfOptions': ['showDelay', 'showDelay', 'closeOnClick', 'closeOnEsc', 'multipleOpened',
                'vOffset', 'hOffset', 'fullScreen', 'btmOffsetPct', 'overlay', 'resetOnClose',
                'deepLink', 'dataAnimationIn', 'dataAnimationOut'],


  /**
   * Handle any configuration after the widget has been inserted.
   */
  handleInsert() {
    this.$().css("outline", "none");
  }
});
