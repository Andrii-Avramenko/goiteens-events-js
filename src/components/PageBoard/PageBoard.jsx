import { Board } from "./PageBoard.styled";
import { Event } from "../Event/Event";
import PropTypes from "prop-types";

export const PageBoard = ({ events }) => {
  return (
    <Board>
      {events.map(({ name, location, speaker, type }) => {
        return <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
        />;
      })}
    </Board>
  );
};

PageBoard.propTypes = {
  events: PropTypes.array.isRequired
}