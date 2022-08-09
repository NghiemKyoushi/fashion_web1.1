import React from 'react';
import {toast} from 'react-toastify';

export const toastSuccess = (message: string) => {
    toast.clearWaitingQueue();
    return toast.info((message), {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
};

export const toastFail = (message:string) => {
    // toast.clearWaitingQueue();
    return toast.dark((message), {
        position: 'top-right',
        autoClose:  3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
};

const toastWarnning = (message: string) => {
    return toast.error((message), {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
};

