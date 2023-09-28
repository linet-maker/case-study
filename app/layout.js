import { Analytics } from '../analytics'
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
