// eslint-disable-next-line import/no-unresolved
import { Analytics } from "/@vercel/analytics/react";
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children}
				 <Analytics />
			</body>
		</html>
	);
}
