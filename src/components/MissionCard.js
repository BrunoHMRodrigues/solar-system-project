import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

class MissionCard extends React.Component {
  render() {
    // const { missionData } = this.props;
    // const { name, year, country, destination } = missionData;
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="container-mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
//   missionData: PropTypes.shape(
//     {
//       name: PropTypes.string,
//       year: PropTypes.number,
//       country: PropTypes.string,
//       destination: PropTypes.string,
//     },
//   ),

  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
//   missionData: [],
  name: 'planeta',
  year: 2000,
  country: 'país',
  destination: 'destino',
};

export default MissionCard;
