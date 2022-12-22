import * as yup from "yup";
export const detailSchema = yup.object().shape({
  key: yup.string().required(),
  value: yup.string().required(),
});