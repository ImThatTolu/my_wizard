/**
 * @file
 * A Backbone Model for the Wizard.
 */

(function (Backbone, Drupal) {
  /**
   * Backbone model for the Wizard.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.myWizard.WizardModel = Backbone.Model.extend({

    /**
     * @type {object}
     *
     * @prop pages
     * @prop activePage
     */
    defaults: {
      /**
       * The active wizard page. All other pages should be hidden under
       * normal circumstances.
       *
       * @type {int}
       */
      activePage: 1,

      /**
       * The wizard pages.
       *
       * @type {array}
       */
      pages: [],
    },

    /**
     * Change the active page to the next.
     */
    nextPage: function() {
      this.set('activePage', this.get('activePage') + 1);
    },

    /**
     * Change the active page to the previous.
     */
    previousPage: function() {
      this.set('activePage', this.get('activePage') - 1);
    }
  });
})(Backbone, Drupal);
