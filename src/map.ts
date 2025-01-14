import { IGraduate } from "./api/graduate/types";

export const statusMap: Record<IGraduate['status'], string> = {
  pending: 'В очікуванні',
  applied: 'Прийнято',
  rejected: 'Відхилено',
};

export const majorMap: Record<IGraduate['degree'][0]['major'], string> = {
  computerEngineering: 'Комп’ютерна інженерія',
  electronics: 'Електроніка',
};

export const degreeMap: Record<IGraduate['degree'][0]['degree'], string> = {
  bachelor: 'Бакалавр',
  magister: 'Магістр',
  aspirant: 'Аспірант',
};

export const helpMap: Record<IGraduate["departamentHelping"], string> = {
  nothing: 'Жодна',
  lessons: 'Проведення лекції/вебінару', 
  financial: 'Фінансова допомога',
  accreditation: 'Допомога з акредитацією',
};