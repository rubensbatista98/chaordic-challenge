import './styles.css';

function AlgorithmSection() {
  const $algorithmSection = document.createElement('section');
  $algorithmSection.className = 'algorithm-section';

  $algorithmSection.innerHTML = `
    <div>
      <h1 class="title">Ajude o algorítimo a ser mais certeiro</h1>

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
    </div>

    <div>
      <form>
        <div class="input-block">
          <label for="name">Seu nome:</label>
          <input type="text" id="name" />
        </div>

        <div class="input-block">
          <label for="email">E-mail:</label>
          <input type="email" id="email" />
        </div>

        <div class="input-block">
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" />
        </div>

        <div class="radios-container">
          <label for="masc">
            <input id="masc" type="radio" name="gender" value="masc" />
            Masculino
          </label>

          <label for="fem">
            <input id="fem" type="radio" name="gender" value="fem"/>
            Feminino
          </label>
        </div>

        <button class="button">Enviar</button>
      </form>
    </div>
  `;

  return $algorithmSection;
}

export { AlgorithmSection };
