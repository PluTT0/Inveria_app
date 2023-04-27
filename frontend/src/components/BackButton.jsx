import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ReverceBtton } from '../style';

const BackButton = ({url}) => {
  return (
    <ReverceBtton>
      <Link to={url}>
        <FaArrowAltCircleLeft />Back
      </Link>
    </ReverceBtton>
  )
}

export default BackButton
