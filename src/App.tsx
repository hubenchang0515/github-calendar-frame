import GitHubCalendar from 'react-github-calendar';

function App() {
  const args = new URLSearchParams(window.location.search);
  const username = args.get("username") || "hubenchang0515"
  return (
    <GitHubCalendar username={username} />
  )
}

export default App
