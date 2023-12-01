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
      audio: null,
    };
    this.clickEvent = this.clickEvent.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }

  clickEvent() {
    const { counter, memberInfo, audio} = this.state;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    if (counter < memberInfo.length) {
      const nextMember = memberInfo[counter];
      this.setState({
        currentMember: nextMember,
        counter: counter + 1,
        audio: null, 
      });
    } else {
      // If array ends, reset the counter to 0
      this.setState({
        currentMember: memberInfo[0],
        counter: 1,
        audio: null, 
      });
    }
  }

  playAudio() {
    const { currentMember } = this.state;
    if (currentMember) {
      const newAudio = new Audio(currentMember.voice);
      newAudio.play();
      this.setState({
        audio: newAudio,
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
          {this.state.currentMember && (
            <div>
              <TeamMember
                key={this.state.currentMember.id}
                img={this.state.currentMember.img}
                name={this.state.currentMember.name}
                position={this.state.currentMember.position}
                phone={this.state.currentMember.phone}
                email={this.state.currentMember.email}
                website={this.state.currentMember.website}
              />
              <button
                className="btn btn-success btn-lg btn-block"
                onClick={this.playAudio}
              >
                Play Sound
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default TeamClick;
