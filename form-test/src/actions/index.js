import nameList from '../apis/nameList';

export const submitName = (formValues) => async (dispatch) => {
  await nameList.post('/nameList', formValues)
};