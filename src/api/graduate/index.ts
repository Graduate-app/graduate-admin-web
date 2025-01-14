import { applyGraduate } from './applyGraduate';
import { createGraduate } from './createGraduate';
import { getGraduates } from './getGraduates';
import { rejectGraduate } from './rejectGraduate';
import { updateGraduate } from './updateGraduate';

const GraduateApi = {
  getGraduates,
  createGraduate,
  updateGraduate,
  applyGraduate,
  rejectGraduate,
};

export default GraduateApi;

export type * from './types';
