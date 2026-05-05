import PropTypes from "prop-types";
import { Card, CardName, Info, Chip } from "./Event.styled";
import { FaMapMarkedAlt, FaCalendarAlt, FaUserAlt, FaClock  } from "react-icons/fa";

export const Event = ({ name, location, speaker, type, time }) => {
  return (
    <Card>
      <CardName>{name}</CardName>

      <Info>
        <FaMapMarkedAlt />
        {location}
      </Info>
      <Info>
        <FaUserAlt />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt />
        {time}
      </Info>
      <Info>
        <FaClock />
        
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}