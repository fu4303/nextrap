import Head from "next/head"
import Navbar from "../organisms/Navbar"

export default function Home() {
	return (
		<>
			<Head>
				<title>Welcome | Nextrap</title>
				<meta name="title" content="Welcome | Nextrap" />
				<meta
					name="description"
					content="A simple Nextjs app boilerplate with steroid packages to boost your productivity and helps you quick started your project"
				/>
			</Head>

			<Navbar />

			<main className="container">
				<div className="row justify-content-center py-5">
					<div className="col-md-6">
						<h1>
							Welcome to
							<a
								className="text-success"
								href="https://github.com/ekimkael/nextrap"
							>
								{" "}
								Nextrap
							</a>
						</h1>

						<p className="lead text-muted">
							A simple Nextjs app boilerplate with steroid packages to boost
							your productivity and helps you quick started your project
						</p>

						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>

						<h3 className="text-secondary">Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</div>
				</div>
			</main>
		</>
	)
}
