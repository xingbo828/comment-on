import React from 'react'
import Styled from 'styled-components';
import Icon from '../../../globalComponents/Icon';


const Item = Styled.li`
  margin: 0 0 1rem;
  flex-wrap: wrap;
  flex: 1 50%;
`;

const Glyph = Styled.div`
  font-size: .75em;
  display: inline-block;
  height: 1.5rem;
  width: 1.5rem;
  background: ${props=>props.theme.colors.primary};
  color: white;
  text-align: center;
  line-height: 1.5rem;
  margin: 0 1rem 0 0;
`;

const ListItem = ({ glyph, children }) => {
  return (
    <Item> 
      {
        glyph && (
          <Glyph>
            <Icon icon={glyph} />
          </Glyph>
        )
      }
      {children}
    </Item>
  )

}

export default ListItem