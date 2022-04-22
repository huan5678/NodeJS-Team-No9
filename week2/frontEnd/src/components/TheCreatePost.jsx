import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

const schema = yup.object({
  userName: yup.string().required('請輸入使用者名稱，此為必要欄位'),
  userContent: yup.string().required('請輸入內容，此為必要欄位'),
  userPhoto: yup.string(),
  imgUrl: yup.string(),
}).required();

function TheCreatePost() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // 將form的資料轉換成API的物件格式
    const submitData = {
      userName: data.userName?.trim(),
      userContent: data.userContent?.trim(),
      userPhoto: data.userPhoto?.trim(),
      imgUrl: data.imgUrl?.trim(),
    };
    console.log(submitData);
  };

  // const watchAllFields = watch();
  useEffect(() => {
    const watchUserName = watch("userName");
    const watchUserContent = watch("userContent");
    const watchUserPhoto = watch("userPhoto");
    const watchimgUrl = watch("imgUrl");
    console.log(watchUserName);
    console.log(watchUserContent);
    console.log(watchUserPhoto);
    console.log(watchimgUrl);
    // const formData = watch((value, { name, type }) => console.log(value, name, type));
  }, [watch]);
  return(
    <section className="card p-8">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto space-y-1">
          <label htmlFor="postContent">貼文內容
          <textarea
            id="postContent"
            type="text"
            name="postContent"
            rows="6"
            cols="45"
            className="form-control py-3 px-6"
            placeholder="輸入您的貼文內容"
            />
          </label>
          <label htmlFor="imgUrl">
            貼文圖片
            <div className="flex flex-col gap-2">
                <input
                  id="imgUrl"
                  name="imgUrl"
                  { ...register('imgUrl')}
                  className="form-control"
                  placeholder="請輸入圖片網址"
                />
            </div>
          </label>
          <img src="" alt="" srcSet="" />
          <label className="block mb-2" htmlFor="userName">
            使用者名稱
            <div className="flex flex-col gap-2">
              <input
                id="userName"
                {...register('userName')}
                className="form-control"
                placeholder="請輸入姓名"
                />
              {errors.userName && (
                <p className="text-danger flex-none">{errors.userName.message}</p>
              )}
            </div>
          </label>
          <label htmlFor="userPhoto">
            使用者圖片
            <div className="flex flex-col gap-2">
              <input
                id="userPhoto"
                { ...register('userPhoto')}
                className="form-control"
                placeholder="請輸入姓名"
              />
              {errors.userPhoto && (
                <p className="text-danger flex-none">{errors.userPhoto.message}</p>
              )}
            </div>
          </label>
          <button type="submit" className="">送出貼文</button>
        </div>
      </form>
    </section>
  )
}

export default TheCreatePost