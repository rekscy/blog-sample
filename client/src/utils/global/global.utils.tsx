import {AxiosError} from "axios";
import {store, ReactNotificationOptions} from 'react-notifications-component';

/**
 * Helper to process http errors
 */
export const createNotificationFromAxiosHttpError = (error: AxiosError) => {
  const notification: ReactNotificationOptions = {
    title: "Oops!",
    message: "An unknown error has occurred",
    type: "danger",
    insert: "top",
    container: "top-right",
    dismiss: {
      duration: 10 * 1000
    }
  }

  const {response} = error;
  if(response){
    const {data, status} = response;
    switch (status) {
      case 400:
        notification.message = (
          <div></>
        )
        break;
      case 404:
      case 500:
      default:
        if(data.message){
          notification.message = data.message
        }
    }
  }else{
    notification.message = "We couldn't reach the server"
  }
  return notification;
};
