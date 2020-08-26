import ReactDOM from 'react-dom';

export default function Portal({ children }) {
  const modalRoot = document.querySelector('#modal-root');
  return ReactDOM.createPortal(children, modalRoot);
}
