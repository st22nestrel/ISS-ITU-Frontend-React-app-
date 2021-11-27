import React, { useState } from 'react'
import yesno from "yesno-dialog"

/**
 * 
 * @param Login login fnc
 * @returns 
 */
function DeleteUser({Delete}) {

    const submitHandler = e => {
        e.preventDefault();

        Delete();
    }

    return (
        <div>
            <button class="w-100 btn btn-lg btn-outline-danger"
            onClick={() => {
                const confirmBox = window.confirm(
                    'Jste si jist že chcete odstranit účet?'
                )
                if (confirmBox === true) {
                    submitHandler();
                }
              }}
            >Zmazat účet</button>
        </div>
    )
}

export default DeleteUser
