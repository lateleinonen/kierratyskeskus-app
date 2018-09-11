import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ProductForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" placeholder="title" component="input" type="text" />
      </div>
      <div>
        <Field name="shelfNo" placeholder="description" component="input" type="text" />
      </div>
      <div>
        <Field name="description" placeholder="shelf no" component="input" type="text" />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'productInfo',
  // enableReinitialize: true,
})(ProductForm);