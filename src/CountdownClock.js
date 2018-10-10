import React, { Component } from 'react';
import styled from 'styled-components';
import { withNamespaces } from 'react-i18next';
import ClockItem from './ClockItem';

const BLACK_FRIDAY = new Date('2018-11-23T00:00:00');

const CountdownContainer = styled.div`
  margin: 0 auto;
  width: max-content;
  padding: 100px;
`;

const CountdownLabel = styled.span`
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 5px;
`;

class CountdownClock extends Component {
  state = { now: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getTimeDifference = (timeA, timeB) => {
    const aAfterB = timeA - timeB >= 0;
    let milliSecDiff = Math.abs(timeA - timeB);
    const days = Math.floor(milliSecDiff / (1000 * 60 * 60 * 24));
    milliSecDiff -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(milliSecDiff / (1000 * 60 * 60));
    milliSecDiff -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(milliSecDiff / (1000 * 60));
    milliSecDiff -= minutes * 1000 * 60;
    const seconds = Math.floor(milliSecDiff / 1000);
    return { days, hours, minutes, seconds, aAfterB };
  };

  tick = () => {
    this.setState({ now: new Date() });
  };

  render() {
    const { t } = this.props;
    const timeDifference = this.getTimeDifference(this.state.now, BLACK_FRIDAY);
    return (
      <CountdownContainer>
        <CountdownLabel>
          {timeDifference.aAfterB ? t('started ago.part1') : t('starts in')}
        </CountdownLabel>
        <div>
          <ClockItem
            value={timeDifference.days}
            unitSingular={t('day')}
            unitPlural={t('days')}
            minDigits="1"
          />
          <ClockItem
            value={timeDifference.hours}
            unitSingular={t('hour')}
            unitPlural={t('hours')}
            minDigits="2"
          />
          <ClockItem
            value={timeDifference.minutes}
            unit="minute"
            unitSingular={t('minute')}
            unitPlural={t('minutes')}
            minDigits="2"
          />
          <ClockItem
            value={timeDifference.seconds}
            unit="second"
            unitSingular={t('second')}
            unitPlural={t('seconds')}
            minDigits="2"
          />
        </div>
        <CountdownLabel>
          {timeDifference.aAfterB && t('started ago.part2')}
        </CountdownLabel>
      </CountdownContainer>
    );
  }
}

export default withNamespaces('translation')(CountdownClock);
