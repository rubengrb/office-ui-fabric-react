// tslint:disable:no-any
import { IAppDefinition } from '@uifabric/example-app-base';
import { AppCustomizations } from './customizations';

export const AppDefinition: IAppDefinition = {
  appTitle: 'Fabric - React',
  customizations: AppCustomizations,
  testPages: [],
  examplePages: [
    {
      links: [
        {
          component: require<any>('../components/Card/CardPage').CardPage,
          key: 'Card',
          name: 'Card',
          url: '#/examples/card'
        }
      ]
    }
  ],
  headerLinks: [
    {
      name: 'Getting started',
      url: '#/'
    },
    {
      name: 'Fabric',
      url: 'http://dev.office.com/fabric'
    },
    {
      name: 'Github',
      url: 'http://www.github.com/officedev'
    }
  ]
};
