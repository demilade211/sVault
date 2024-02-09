'use client'

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { SetUser, SetExpired } from "@/redux/slices/userSlice";
import { ShowLoader, HideLoader } from "@/redux/slices/loaderSlice";
import { getLoggedInUser } from "@/services/auth"
import cookie from "js-cookie"
import AppLoader from '@/components/loaders/AppLoader';
import { useRouter, usePathname } from 'next/navigation'

const AppGuard = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname()
  const { loader } = useSelector(state => state.loaderReducer)
  const { user } = useSelector((state) => state.userReducer);
  let token = cookie.get("token");
  const protectedRoutes = pathname === "/home"
    || pathname === "/atm/[atmId]" 
    || pathname === "/atm/create" 
    || pathname === "/profile" 

  const dispatch = useDispatch();

  const doFetchUserDetails = useCallback(async () => {


    try {
      dispatch(ShowLoader())
      const response = await getLoggedInUser()
      dispatch(HideLoader())
      if (response.success) {
        dispatch(SetUser(response.user))
        // if(!protectedRoutes){
        //   router.push("/home");
        // }
      } else {
        if (response.message === "JSON Web Token is expired. Try Again!!!") {
          dispatch(SetExpired("expired"))
          cookie.remove("token");
          router.push("/auth/login");
        }
      }
    } catch (error) {
      dispatch(HideLoader())
      // dispatch(SetExpired("Unauthenticated"))
      // cookie.remove("token");
      // router.push("/auth/login");
    }
  }, [dispatch])

  useEffect(() => {
    if (token) {
      doFetchUserDetails()
    } else { 
      if(protectedRoutes){
        router.push("/auth/login"); 
      }
      dispatch(HideLoader()) 
    }
  }, [doFetchUserDetails])


  return (
    <>
      {loader ? <AppLoader /> : children}
    </>
  )
}

export default AppGuard