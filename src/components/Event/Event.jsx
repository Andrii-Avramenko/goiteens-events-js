export const Event = props => {
    return (
        <li className="event">
            <b>{props.name}</b>
            <p>{props.location}</p>
            <p>{props.speaker}</p>
            <p>{props.time.start}</p>
            <p>{} hours</p>
        </li>
    )
}