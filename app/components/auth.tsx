"use client"
import {signIn, signOut, useSession} from "next-auth/react"

export const Auth = () => {
    const {data: session} = useSession()
    if (session) {
        return <>{session?.user?.name}
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return <>
        <button onClick={() => signIn()}>Sign in</button>
    </>
}