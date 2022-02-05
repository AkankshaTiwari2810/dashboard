import { ApplicationState } from './Interfaces';

export const initialState: ApplicationState = {
  features: [
    { id: 1, title: 'Case Management', active: true },
    { id: 2, title: 'Map Timeline', active: true },
    { id: 3, title: 'Views & Breifing', active: true },
    { id: 4, title: 'Notification', active: true },
    { id: 5, title: 'Mass Communication', active: true },
    { id: 6, title: 'Traffic Cameras', active: true },
    { id: 7, title: 'Audit Log', active: true },
    { id: 8, title: 'Users', active: true },
    { id: 9, title: 'Users Add', active: true },
    { id: 10, title: 'Users Delete', active: true },
    { id: 11, title: 'User Edit', active: false },
    { id: 12, title: 'Max User', active: false, count: 4 },
    { id: 13, title: 'Alert Manager', active: true },
    { id: 14, title: 'Alert Rules', active: false, count: 5 },
  ],
  categories: [
    { id: 'category1', title: 'General', items: [1, 2, 3, 4, 5, 6] },
    { id: 'category2', title: 'Settings', items: [7, 8], group: true },
    { id: 'category3', title: 'Alert', items: [13, 14], group: true },
  ],

  subCategories: [{ id: 8, items: [9, 10, 11, 12] }],
};
