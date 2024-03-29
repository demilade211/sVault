'use client'

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { SetUser, SetExpired, SetAdmin } from "@/redux/slices/userSlice";
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
    || pathname === "/profile/admin/analytics"

  const dispatch = useDispatch();

  const doFetchUserDetails = useCallback(async () => {


    try {
      dispatch(ShowLoader())
      const response = await getLoggedInUser()
      dispatch(HideLoader())
      console.log(response);
      if (response.success) {
        dispatch(SetUser(response.user))
        dispatch(SetAdmin(response.admin)) 
      } else {
        // if (response.message === "JSON Web Token is expired. Try Again!!!") {
        //   dispatch(SetExpired("expired"))
        //   cookie.remove("token");
        //   router.push("/auth/login");
        // }
        dispatch(SetExpired("expired"))
        cookie.remove("token");
        window.location.href = "/auth/login";
      }
    } catch (error) {
      dispatch(HideLoader())
      dispatch(SetExpired("Unauthenticated"))
      cookie.remove("token");
      window.location.href = "/auth/login";
    }
  }, [dispatch])

  useEffect(() => { 
    if (!token) { 
      if (protectedRoutes) { 
        window.location.href = "/auth/login";
      }
      dispatch(HideLoader())
    } else {
      doFetchUserDetails()
    }
  }, [doFetchUserDetails])


  return (
    <>
      {loader ? <AppLoader /> : children}
    </>
  )
}

export default AppGuard