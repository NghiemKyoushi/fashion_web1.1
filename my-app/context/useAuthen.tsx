import React , {useContext, useEffect, useState} from 'react';
const AuthenContext = React.createContext<any>(null);
import {createUserWithEmailAndPassword,signInWithEmailAndPassword , signOut , getAuth, onAuthStateChanged} from "firebase/auth";
import {toastSuccess, toastFail} from '../common/utils';
import { useRouter } from 'next/router'
import { auth } from '../helpers/firebase';
export default function AuthenProvider(props: any) {
    const [user, setUser] = useState<any>();
    const [isLogin, setIsLogin] = useState(false);
    const router = useRouter()

    const login = async (mail: string, password: string) => {
        try{
            signInWithEmailAndPassword(auth, mail, password).
            then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
              router.push('/')
              })
        }catch(e){
            toastFail('⚠️⚠️⚠️ Register fail!');
        }
    }

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const register = async (mail: string, password: string) => {
        try{
          await createUserWithEmailAndPassword(auth, mail, password);
          toastSuccess('👏👏👏 Register successfully!');
          router.push('/signin')
        }catch(e){
          toastFail('⚠️⚠️⚠️ Register fail!');
        }
      }
    
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUser({uid: uid, email: user.email})
            } else {
                setUser(undefined)
            }
          });
      }, [])
     

    
    return <AuthenContext.Provider value={{user, register, login, logout}}>
        {props.children}
        </AuthenContext.Provider>
}


export function useAuth() {
    return useContext(AuthenContext);
}

