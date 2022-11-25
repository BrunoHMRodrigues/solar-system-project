import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { missionData } = this.props;
    const { name, year, country, destination } = missionData;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  missionData: PropTypes.shape(
    {
      name: PropTypes.string,
      year: PropTypes.string,
      country: PropTypes.string,
      destination: PropTypes.string,
    },
  ),
//   name: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   country: PropTypes.string.isRequired,
//   destination: PropTypes.string.isRequired,
};

MissionCard.defaultProps = {
  missionData: [],
};

export default MissionCard;
