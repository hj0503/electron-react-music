import { Data } from '@/types';

// 包裹async/await错误处理
export function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: Data
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }
      return [err, undefined];
    });
}
