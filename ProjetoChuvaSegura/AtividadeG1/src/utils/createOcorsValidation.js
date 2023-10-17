import * as yup from "yup";

export const createOcorsSchema = yup.object().shape({
    title: yup
        .string()
        .required("O título é obrigatório")
        .min(3, "O título deve ter pelo menos 3 caracteres"),
    description: yup
        .string()
        .required("A descrição é obrigatória")
        .min(20, "Deve conter ao menos 20 caracteres"),
});