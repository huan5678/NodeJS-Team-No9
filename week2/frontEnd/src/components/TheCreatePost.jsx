/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";

const schema = yup.object({
  userName: yup.string().required('請輸入使用者名稱，此為必要欄位'),
  userContent: yup.string().required('請輸入內容，此為必要欄位'),
  userPhoto: yup.string(),
  imgUrl: yup.string(),
}).required();

const baseUrl = 'http://localhost:3000';

function TheCreatePost ()
{
  const handlePostSubmit = (data) =>
  {
    // const submitData = {
    //   userName: data.userName?.trim(),
    //   userContent: data.userContent?.trim(),
    //   userPhoto: data.userPhoto?.trim(),
    //   imgUrl: data.imgUrl?.trim(),
    // };
    console.log(data);
    const url = `${baseUrl}/`;
    axios.post(url, data).then(res =>
    {
      console.log(res);
    }).catch(err => console.log(err));
  };

  return(
    <section className="card p-8">
      <Formik
      initialValues={{
        userName: '',
        userContent: '',
        userPhoto: '',
        imgUrl: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => handlePostSubmit(values)}
      >
        {({ errors, touched, handleSubmit, values, handleBlur, handleChange }) => (
        <Form onSubmit={ handleSubmit }>
          <div className="mx-auto space-y-4">
            <div className="space-y-1">
              <label htmlFor="userContent">
                貼文內容
              </label>
                <Field name="userContent">
                  {({ field }) => (
                  <div className="space-y-1">
                    <textarea
                      id="userContent"
                      value={values.userContent}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="userContent"
                      rows="6"
                      cols="45"
                      className="form-control py-3 px-6"
                      placeholder="輸入您的貼文內容"
                    />
                    {
                      errors[field.name] && touched[field.name] &&
                      <p className="text-danger flex-none">{errors[field.name]}</p>
                    }
                  </div>
                  )}
              </Field>
            </div>
            <div className="space-y-1">
              <label htmlFor="imgUrl">
                貼文圖片
              </label>
                <Field name="imgUrl">
                  {({ field }) => (
                    <div className="space-y-1">
                      <input
                        id="imgUrl"
                        type="text"
                        name="imgUrl"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.imgUrl}
                        className="form-control"
                        placeholder="請輸入貼文圖片網址"
                      />
                      {
                      errors[field.name] && touched[field.name] &&
                      <p className="text-danger flex-none">{errors[field.name]}</p>
                    }
                    </div>
                  )}
              </Field>
              </div>
              {
                values.imgUrl ? (<img src={values.imgUrl} className="border-2 rounded-lg border-black" alt="" />) : null
            }
            <div className="space-y-1">
              <label className="block mb-2" htmlFor="userName">
              使用者名稱
              </label>
                <Field name="userName">
                {({ field }) => (
                  <div className="space-y-1">
                    <input
                      id="userName"
                      name="userName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userName}
                      className="form-control"
                      placeholder="請輸入使用者姓名"
                    />
                    {
                      errors[field.name] && touched[field.name] &&
                      <p className="text-danger flex-none">{errors[field.name]}</p>
                    }
                  </div>
                )}
              </Field>
            </div>
            <div className="space-y-1">
              <label htmlFor="userPhoto">
                使用者圖片
                </label>
                <Field name="userPhoto">
                  {({ field, }) => (
                    <div className="space-y-1">
                      <input
                        id="userPhoto"
                        name="userPhoto"
                        value={values.userPhoto}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                        placeholder="請輸入使用者頭像圖片網址"
                      />
                      {
                      errors[field.name] && touched[field.name] &&
                      <p className="text-danger flex-none">{errors[field.name]}</p>
                      }
                    </div>
                  )}
                </Field>
            </div>
            <button type="submit" className={
              `text-center border-black border-2 py-4
            rounded-lg bg-info-dark text-black font-bold w-full
            active:translate-y-1
            hover:bg-secondary hover:text-black transition-all duration-300
              ${errors?.userPhoto?.message ? 'bg-secondary': ''}
              `
            }
            >送出貼文</button>
            </div>
        </Form>
        )}
      </Formik>
    </section>
  )
}

export default TheCreatePost