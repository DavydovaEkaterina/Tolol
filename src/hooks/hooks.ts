import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { TAppDispatch, TRootState } from "../store/store";

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector; 