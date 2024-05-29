// import comments selector function here
import { useDispatch } from "react-redux";
import { useGetCommentApiQuery } from "../../redux/rtk/api";
import { commentAction } from "../../redux/reducers/commentsReducer";
import { useSelector } from "react-redux";
import { commentSelector } from "../../redux/reducers/commentsReducer";

export const List = () => {
  // RTK Hook
  const { isLoading, isError, data } = useGetCommentApiQuery();

  // is you use dispatch the this 2 line code not needed
  const dispatch = useDispatch();
  dispatch(commentAction.getCommentsSuccess(data));

  // remove the 3 declarations below and replace with state values
  const { comments } = useSelector(commentSelector);

  if (isLoading) {
    return <div className="message">Loading...</div>;
  }
  if (isError) {
    return <div className="message">error</div>;
  }
  return (
    <div className="list">
      {comments?.map((c) => (
        <div className="card" key={c.id}>
          <h3>Name: {c.email.split("@")[0]}</h3>
          <p>{c.body.length <= 100 ? c.body : c.body.substring(100)}</p>
        </div>
      ))}
    </div>
  );
};
