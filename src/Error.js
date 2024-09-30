// ErrorPage.js
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error && <p><i>{error.statusText || error.message}</i></p>}
    </div>
  );
}

export default ErrorPage;
