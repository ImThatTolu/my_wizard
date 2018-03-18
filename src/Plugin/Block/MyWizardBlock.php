<?php

namespace Drupal\my_wizard\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a wizard block.
 *
 * @Block(
 *   id = "my_wizard",
 *   admin_label = @Translation("My Wizard"),
 *   category = @Translation("Custom"),
 * )
 */
class MyWizardBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#theme' => 'my_wizard',
      '#pages' => [
        [
          'title' => $this->t('Page 1'),
          'body' => $this->t('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'),
        ],
        [
          'title' => $this->t('Page 2'),
          'body' => $this->t('quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat'),
        ],
        [
          'title' => $this->t('Page 3'),
          'body' => $this->t('LUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat'),
        ],
      ],
      '#attached' => [
        'library' => [
          'my_wizard/my_wizard'
        ],
      ],
    ];
  }
}
