// import { useEffect } from "react";

import { List } from "./List";
// import { useDispatch } from "react-redux";
// import { getComment } from "../../redux/reducers/commentsReducer";

export const Internet = () => {


  // const dispatch = useDispatch();

  // useEffect(() => {
  // dispatch(getComment());   //this coming on Redux thunk
  // }, [dispatch]);

  return (
    <div className="homeInternet">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
