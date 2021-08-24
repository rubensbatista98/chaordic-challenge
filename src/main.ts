import 'styles/main.css';

import { Home } from 'pages/home';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.appendChild(Home());
