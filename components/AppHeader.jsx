import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = styled.header`
  padding-top: 1rem;
  border-bottom: 1px solid #333;
`;

function AppHeader() {
  return (
    <Header>
      <div className="container">
        <div className="is-clearfix">
          <div className="column is-4 is-pulled-left">
            ScaleCart
          </div>
          <div className="is-pulled-right">
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Search" autoComplete="off" />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default AppHeader;
