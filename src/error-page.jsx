import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  //may use this later
  return (
    <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>If you could contact me and let me know there's a problem, I would greatly appreciate it!</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  );
}