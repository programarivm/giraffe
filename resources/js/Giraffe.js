import ability from '@/ability';
import abilityRules from '@/../../storage/ability-rules.json';
import PrivateApp from '@/components/private/App';
import React, { Component } from 'react';
import Session from '@/Session';

export default class Giraffe extends Component {
  componentDidMount() {
    ability.update(abilityRules[Session.get().role]);
  }

  render() {
    return (
      <div className="Giraffe">
        { Session.get().role ? <PrivateApp /> : window.location.href = '/login' }
      </div>
    );
  }
}
