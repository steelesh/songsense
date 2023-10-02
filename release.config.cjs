module.exports = {
	branches: ['main'],

	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		[
			'@semantic-release/git',
			{
				assets: ['package.json', 'CHANGELOG.md'],
				message: 'chore(release): [skip ci] ${nextRelease.version} 🚀'
			}
		],
		'@semantic-release/github'
	]
};
