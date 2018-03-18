/**
 * @file
 * A Backbone view for the Wizard.
 */

(function ($, Backbone, Drupal) {
  Drupal.myWizard.WizardView = Backbone.View.extend({
    events: {
      'click .my-wizard--next-page': 'onNextClick',
      'click .my-wizard--previous-page': 'onPrevClick',
    },

    /**
     * Backbone view for the Wizard.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.myWizard.WizardView}
     *   The `WizardView` instance.
     */
    render: function render() {
      var total = this.model.get('pages').length;
      var active_page = this.model.get('activePage');

      // Hide/show pages.
      this.model.get('pages').each(function(index, value) {
        index++;
        var isCurrentPage = (index == active_page);
        $(value).toggleClass('hidden', !isCurrentPage);
      });

      // Update UI.
      this.$el.find('.my-wizard--current-page')
        .html(active_page);
      this.$el.find('.my-wizard--total-pages')
        .html(total);

      // Toggle Next/Prev buttons.
      this.$el.find('.my-wizard--next-page')
        .prop('disabled', (active_page == total));
      this.$el.find('.my-wizard--previous-page')
        .prop('disabled', (active_page == 1));

      return this;
    },
    onNextClick: function onNextClick(event) {
      this.model.nextPage();
      event.preventDefault();
      event.stopPropagation();
    },
    onPrevClick: function onPrevClick(event) {
      this.model.previousPage();
      event.preventDefault();
      event.stopPropagation();
    }
  });
})(jQuery, Backbone, Drupal);
