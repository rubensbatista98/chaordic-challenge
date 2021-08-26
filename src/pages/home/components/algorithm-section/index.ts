import './styles.css';

import { InfoColumn } from './info-column';

function AlgorithmSection() {
  const $algorithmSection = document.createElement('section');
  $algorithmSection.className = 'algorithm-section';

  const $infoColumn = InfoColumn();

  $algorithmSection.innerHTML = `
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

  $algorithmSection.prepend($infoColumn);

  return $algorithmSection;
}

export { AlgorithmSection };
