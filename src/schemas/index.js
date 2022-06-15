import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required('مطلوب'),
    email: yup.string().required('مطلوب').email('قم بإدخال بريد إلكتروني صحيح'),
    password: yup.string().required('مطلوب'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'كلمة المرور غير مطابقة').required('مطلوب'),
    category_id: yup.number().required('مطلوب'),
    title: yup.string().required('مطلوب'),
    country: yup.string().required('مطلوب'),
    image: yup.mixed().required('مطلوب'),
    description: yup.string().required('مطلوب'),
});

export const loginSchema = yup.object().shape({
   email: yup.string().required('مطلوب').email('قم بإدخال بريد إلكتروني صحيح'),
   password: yup.string().required('مطلوب')
});