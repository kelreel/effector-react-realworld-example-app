import { sample, forward } from 'effector';
import { $location } from '../../router';
import {
  getPageFromQueryParamsFx,
  setPageToQueryParamsFx,
  PageGate,
  getGlobalFeedFx,
  $currentPage,
  currentPageSetted,
} from './model';

sample({
  source: $currentPage,
  clock: [PageGate.open, currentPageSetted],
  target: getGlobalFeedFx,
});

sample({
  source: $location,
  clock: PageGate.open,
  target: getPageFromQueryParamsFx,
});

forward({
  from: $location,
  to: getPageFromQueryParamsFx,
});

sample({
  source: $location,
  clock: currentPageSetted,
  fn: ({ pathname, search }, page) => ({ pathname, search, page }),
  target: setPageToQueryParamsFx,
});