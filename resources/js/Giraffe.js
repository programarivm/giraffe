import PrivateApp from '@/components/private/App';
import React, { Component } from 'react';
import Session from '@/Session';

export default class Giraffe extends Component {
  render() {
    return (
      <div className="Giraffe">
        { Session.get().role ? <PrivateApp /> : window.location.href = '/login' }
      </div>
    );
  }
}
