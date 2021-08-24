import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  fomr: IForm;
  removeForm: (form: IForm) => void;
};

export const Form: React.FC<Props> = ({ form, removeForm }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteForm = React.useCallback(
    (form: IForm) => dispatch(removeForm(form)),
    [dispatch, removeForm]
  );

  return (
    <div className="Form">
      <div>
        <h1>{form.title}</h1>
        <p>{form.body}</p>
      </div>
      <button onClick={() => deleteForm(form)}>Delete</button>
    </div>
  );
};
