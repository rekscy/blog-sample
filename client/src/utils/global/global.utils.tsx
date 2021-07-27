import { AxiosError } from "axios";
import { ReactNotificationOptions } from "react-notifications-component";
import React from "react";

/** ........
 * Helper to process http errors.
 *
 * @param {AxiosError} error - Error to be processed.
 */
export const createNotificationFromAxiosHttpError = (error: AxiosError) => {
  const notification: ReactNotificationOptions = {
    title: "Oops!",
    message:
      "We are really sorry, but it seems that something wrong has happened. Please try again later.",
    type: "danger",
    insert: "top",
    container: "bottom-right",
    dismiss: {
      duration: 15 * 1000,
    },
  };

  const { response } = error;
  if (response) {
    const { data, status } = response;
    switch (status) {
      case 400:
        const { errors } = data;
        const errorsHtml =
          errors && Array.isArray(errors) ? (
            <ul>
              {errors.map(({ errorMessage, field }) => {
                return <li>{`${field} - ${errorMessage}`}</li>;
              })}
            </ul>
          ) : null;

        notification.message = (
          <div>
            <p>{data.message}</p>
            {errorsHtml}
          </div>
        );
        break;
      case 404:
      case 500:
      default:
        if (data.message) {
          notification.message = data.message;
        }
    }
  } else {
    notification.message =
      "We are really sorry, but it seems that our server is currently offline. Please try again later.";
  }
  return notification;
};
