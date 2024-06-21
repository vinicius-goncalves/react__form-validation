import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAppState = useSelector.withTypes<RootState>();
