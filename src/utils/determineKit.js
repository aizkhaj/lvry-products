import { differenceInMonths } from 'date-fns';
import kitType from './kitTypeEnum';

export default function determineKit(birthdate) {
  const months = differenceInMonths(new Date(), birthdate);

  if (months < 3) {
    return kitType.LOOKER;
  }

  if (months >= 3 && months < 5) {
    return kitType.CHARMER;
  }

  if (months >= 5 && months < 7) {
    return kitType.SENSER;
  }

  if (months >= 7 && months < 9) {
    return kitType.INSPECTOR;
  }

  if (months >= 9 && months < 11) {
    return kitType.EXPLORER;
  }

  if (months >= 11 && months < 13) {
    return kitType.THINKER;
  }
}
