import type { ReactNode, CSSProperties, FormEventHandler } from 'react';
export type Data<T = unknown> = Record<string, T>;

export type ResponseData<T> = T extends Data
  ? T & {
      code: number;
    }
  : { code: number; result: T };

export interface AppProps {
  className?: string;
  children?: ReactNode;
  functionChildren?: (name: string) => ReactNode;
  style?: CSSProperties;
  onChange?: FormEventHandler<HTMLInputElement>;
}

export type AlbumType = 'hot' | 'new';

export type AlbumArea = 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP';
