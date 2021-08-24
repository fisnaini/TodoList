import * as actionTypes from "./actionTypes";

export function addTodoForm(form: IForm) {
  const action: Form = {
    type: actionTypes.ADD_TODOFORM,
    article
  };

  return simulateHttpRequest(action);
}

export function removeForm(form: IForm) {
  const action: FormAction = {
    type: actionTypes.REMOVE_FORM,
    form
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: FormAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
