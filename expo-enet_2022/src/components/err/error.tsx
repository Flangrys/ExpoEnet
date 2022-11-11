import { useRouteError } from "react-router-dom";

export default function Error() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="container" id="error-page">
      <div className="justify-content-center">

        <h1 className="text-center">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>

      </div>
    </div>
  );
}