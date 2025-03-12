import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      console.log('action', action.type);
      state.data.title = action.payload;
    },
    addQestion: (state, action) => {
      const type = action.payload;
      console.log('action', action.type);
      let options = {};
      if (type === 'text' || type === 'textarea') {
        options = {
          max: 20,
          placeholder: '',
        };
      } else if (type === 'select') {
        options = {
          max: 1,
          items: ['가', '나', '다'],
        };
      }

      state.data.questions.push({
        title: 'Untitled',
        desc: '',
        type: type,
        required: false,
        options: options,
      });
    },
    moveUpQestion: (state, action) => {
      const index = action.payload;

      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index - 1];
      state.data.questions[index - 1] = temp;
    },

    moveDownQestion: (state, action) => {
      const index = action.payload;

      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index + 1];
      state.data.questions[index + 1] = temp;
    },
    deleteQestion: (state, action) => {
      const index = action.payload;

      state.data.questions.splice(index, 1);
    },
    setSurvey: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTitle,
  addQestion,
  moveUpQestion,
  moveDownQestion,
  deleteQestion,
  setSurvey,
  setLoading,
  setError,
} = surveySlice.actions;

export default surveySlice.reducer;
