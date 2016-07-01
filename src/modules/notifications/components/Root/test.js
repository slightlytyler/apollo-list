import React from 'react';
import { render } from 'enzyme';
import { NotificationsRoot } from './index';

describe('<NotificationsRoot />', () => {
  it('renders', () => {
    const wrapper = render(<NotificationsRoot notifications={[]} />);
    wrapper.should.be.present();
  });
});
