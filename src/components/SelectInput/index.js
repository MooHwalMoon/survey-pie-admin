import { Radio, Space } from 'antd';

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
};

function SelectInput({ options }) {
  return (
    <Space direction="vertical">
      {options.items.map((item, index) => (
        <Radio key={index}>{item}</Radio>
      ))}
      {/* <Radio.Group style={style} options={options.items} /> */}
    </Space>
  );
}

export default SelectInput;
