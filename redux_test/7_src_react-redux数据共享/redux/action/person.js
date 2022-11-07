import { ADD_PERSON } from "../constant";

// 创建action
export const createAddPersonAction = personObj => ({ type: ADD_PERSON, data: personObj })