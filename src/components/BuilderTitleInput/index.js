import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { setTitle } from '../../stores/survey/surveySlice';

function BuilderTitleInput() {
  const title = useSelector((state) => state.survey.data?.title || '');
  const dispatch = useDispatch();
  return (
    <Input
      placeholder={'설문 제목을 입력해주세요.'}
      value={title}
      onChange={(e) => {
        dispatch(setTitle(e.target.value));
      }}
    />
  );
}

export default BuilderTitleInput;
