import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export default function useAuth() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  if (user === null) {
    dispatch(push('/'));
  }
}
