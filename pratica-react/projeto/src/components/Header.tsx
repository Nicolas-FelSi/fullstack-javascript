interface HeaderProps {
	titulo?: string;
}

function Header({titulo = "Curso React + TypeScript"}: HeaderProps) {
	return (
		<>
			<h1>{titulo}</h1>
		</>
	)
}

export default Header;