import { useCallback } from 'react';
import { cloneDeep, uniq } from 'lodash';

export const useTempId = () => {
  const getIdGenerator = useCallback((preexistingIds: number[]) => {
    let existingIds = cloneDeep(preexistingIds);
    let last = 0;

    const next = () => {
      last--;
      if(existingIds.includes(last)) {
        next();
      }
      existingIds = uniq([
        ...existingIds,
        last,
      ]);
      return last;
    };

    return {
      next,
    }
  }, []);

  return {
    getIdGenerator,
  };
};

export default useTempId;