// error oage 

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<main id="error-page">
			<h1>No Page Found.</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</main>
	)
}