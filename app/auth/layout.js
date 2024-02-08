'use client'

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation'
import cookie from "js-cookie"

const AuthLayout = ({ children }) => {

    const router = useRouter();
    let token = cookie.get("token");

    useEffect(() => {
        if (token) {
            router.push("/home");
        }
    }, [])

    return (
        <div>{children}</div>
    )
}

export default AuthLayout