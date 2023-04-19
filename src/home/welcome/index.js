import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { welcomeUsersThunk } from './welcome-thunk';
import './welcom-style.css'

const WelcomeUsers = () => {
  const newUsers = useSelector((state) => state.welcomeUsers);
  const userArray = Object.values(newUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(welcomeUsersThunk());
  }, []);

  return (
    <div className="welcome-users-banner d-flex align-items-center welcome-banner-image">
      <h4 className="ms-4 mb-0 me-4 text-white"> New Users Are Ready to The Moon!!!</h4>
      <div className="d-flex flex-row overflow-auto">
        {userArray && (
          <ul className="list-unstyled d-flex mb-0 fw-bolder fs-3">
            {userArray?.map((item) => (
              <li className="me-3" key={item._id}>
                <a href={`/profile/${item._id}`} className="text-decoration-none  text-white">
                  {item.username}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WelcomeUsers;