import { createEffect, restore, forward } from 'effector-root';
import { createGate } from 'effector-react';
import { request } from 'api';
import { TagsList } from './types';

export const Gate = createGate();

export const fetchTagsFx = createEffect<void, TagsList>(() =>
  request.get('tags').then(({ data }) => data.tags),
);

export const $tags = restore(fetchTagsFx.doneData, []);

forward({
  from: Gate.open,
  to: fetchTagsFx,
});
