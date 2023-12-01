import React, { Component } from 'react';
import TeamMember from './TeamMember';
import memberInfo from './memberInfo';

class TeamClick extends Component {
  constructor() {
    super();
    this.state = {
      memberInfo: memberInfo,
      currentMember: null,
      counter: 0,
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {
    const { counter, memberInfo } = this.state;
    if (counter < memberInfo.length) {
      const nextMember = memberInfo[counter];
      this.setState({
        currentMember: nextMember,
        counter: counter + 1,
      });
    } else {
      // If array ends, reset the counter to 0
      this.setState({
        currentMember: memberInfo[0],
        counter: 1,
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={this.clickEvent}
          >
            Click me!
          </button>
        </div>
        {this.state.currentMember && (
          <TeamMember
            key={this.state.currentMember.id}
            img={this.state.currentMember.img}
            name={this.state.currentMember.name}
            position={this.state.currentMember.position}
            phone={this.state.currentMember.phone}
            email={this.state.currentMember.email}
            website={this.state.currentMember.website}
          />
        )}
      </div>
    );
  }
}

export default TeamClick;
