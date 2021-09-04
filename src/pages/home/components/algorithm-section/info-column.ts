import { createElement } from 'utils/create-element';

function InfoColumn() {
  const $column = createElement('div', {
    children: `
      <h1 class="title">Ajude o algorítmo a ser mais certeiro</h1>

      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies
        tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum
        dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet
        iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
        euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis
        tristique eleifend.
      </p>

      <p class="paragraph">
        Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse
        quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula
        pharetra. Quisque ut.
      </p>
    `
  });

  return $column;
}

export { InfoColumn };
