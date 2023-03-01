import { useAppSelector } from '@/hooks';

export const selectValue = useAppSelector(state => state.user.cookie);
