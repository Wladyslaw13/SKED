import ThemeToggle from './ThemeToggle'

function AppHeader() {
	return (
		<header className='app-header' role='banner'>
			<h1>SKED</h1>
			<ThemeToggle />
		</header>
	)
}
export default AppHeader
