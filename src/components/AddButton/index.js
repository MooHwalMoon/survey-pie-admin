import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

function AddButton({ addQuestion }) {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleOpenChange = (visible) => {
    setVisible(visible);
  };
  return (
    <AddButtonWrapper>
      {/* <IconButton onClick={onClick}>
        <PlusCircleOutlined />
      </IconButton> */}
      <Popover
        content={
          <div>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion('select');
              }}
              style={{ display: 'block' }}
            >
              객관식
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion('text');
              }}
              style={{ display: 'block' }}
            >
              단답식
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion('textarea');
              }}
              style={{ display: 'block' }}
            >
              서술식
            </Button>
          </div>
        }
        placement="right"
        trigger="click"
        open={visible}
        onOpenChange={handleOpenChange}
      >
        <IconButton>
          <PlusCircleOutlined />
        </IconButton>
      </Popover>
    </AddButtonWrapper>
  );
}

export default AddButton;

const AddButtonWrapper = styled.div`
  text-align: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 2.5rem;
  cursor: pointer;
`;
