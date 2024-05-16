import { useDispatch, useSelector } from "react-redux";
import { Time } from "./Time";
import { TimerActions } from "./TimerActions";
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notoficationReducer";

export const Timer = () => {
  // get alert message here
  const message = useSelector(notificationSelector);
  const dispatch = useDispatch();
  // create effect to reset alert message here
  if (message) {
    setTimeout(() => {
      dispatch(resetNotification());
    }, 2000);
  }

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message && <div className="alertB">{message}</div>}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
