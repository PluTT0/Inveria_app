import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { ReverceBtton } from '../style';

const NewButton = styled(ReverceBtton)`
    max-width: 180px;
`;

const CreateButton = ({url}) => {
  return (
    <NewButton>
      <Link to={url}>
        <FaQuestionCircle />Create Ticket
      </Link>
    </NewButton>
  )
}

export default CreateButton