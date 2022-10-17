import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { routes } from './routes';

console.log(import.meta.env.VITE_RAWG_KEY)
document.querySelectorAll('[data-bs-toggle="popover"]')
.forEach(popover => {
  new bootstrap.Popover(popover)
})

// console.log(bootstrap)

const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split('/');

  const pageName = pathParts[0];
  const pageArgument = pathParts[1] || '';
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  }
};

window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());