import React from 'react';
import { useNavigate,Link } from 'react-router-dom';

export default function App11() {
  const navigate = useNavigate();

  const goToApp5 = () => {
    navigate('/app5'); 
  };

  return (
    <div>
      <h3>App11</h3>
      <button onClick={goToApp5}>Go To App5</button> <br />
        <Link to="/app5">Go To App5</Link>

    </div>
  );
}
