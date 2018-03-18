/**
 * @file
 * Activate the Wizard.
 */

(function ($, Drupal) {
  Drupal.behaviors.myWizard = {
    attach: function attach(context, settings) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('.my-wizard').once('myWizard').each(function(index) {
        var model = Drupal.myWizard.models[index] = new Drupal.myWizard.WizardModel({
          pages: $(this).find('.my-wizard--page')
        });

        Drupal.myWizard.views[index] = new Drupal.myWizard.WizardView({
          el: this,
          model: model
        });
      });
    }
  };

  Drupal.myWizard = Drupal.myWizard || {
    models: {},

    views: {}
  };
})(jQuery, Drupal);
