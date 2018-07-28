import Example from './components/Example';

const routes = [
  {
    path: '/',
    name: 'Default',
    components: {
      // 'menu-top': Navmenu,
      default: Example
      // 'foot-compo': Footer
    }
  }
];

export default routes;
