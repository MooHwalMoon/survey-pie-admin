import { useDispatch, useSelector } from 'react-redux';

import {
  addQestion,
  deleteQestion,
  moveDownQestion,
  moveUpQestion,
} from '../../stores/survey/surveySlice';
import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

function PreviewSection() {
  const questions = useSelector((state) => state.survey.data?.questions || []);

  const dispatch = useDispatch();

  const handleAddQuestion = (type) => {
    dispatch(addQestion(type));
  };
  const handleMoveUpQustion = (index) => {
    if (index === 0) {
      return;
    }

    dispatch(moveUpQestion(index));
  };
  const handleMoveDownQuestion = (index) => {
    if (index === questions.length - 1) {
      return;
    }

    dispatch(moveDownQestion(index));
  };
  const handleDeleteQuestion = (index) => {
    dispatch(deleteQestion(index));
  };

  console.log('questions111', questions);
  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => handleMoveUpQustion(index)}
          onDownButtonClick={() => handleMoveDownQuestion(index)}
          onDeleteButtonClick={() => handleDeleteQuestion(index)}
        >
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton addQestion={handleAddQuestion} />
    </div>
  );
}

export default PreviewSection;
