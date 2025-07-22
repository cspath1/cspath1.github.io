const version = "${version}";
const packageName = process.env.npm_package_name;
const remoteRepoUrl = process.env.REMOTE_REPO_URL;
const scope = packageName.split("/")[1];

if (!remoteRepoUrl) {
  throw new Error("REMOTE_REPO_URL is not set");
}

module.exports = {
  plugins: {
    "@release-it/conventional-changelog": {
      path: ".",
      infile: "CHANGELOG.md",
      preset: "conventionalcommits",
      gitRawCommitsOpts: {
        path: "."
      }
    }
  },
  git: {
    push: true,
    tagName: `${packageName}-v${version}`,
    pushRepo: remoteRepoUrl,
    commitsPath: ".",
    commitMessage: `release(${scope}): released version v${version} [skip ci]`,
    requireCommits: true,
    requireCommitsFail: false
  },
  npm: {
    publish: false,
    versionArgs: ["--workspaces false"]
  },
  hooks: {
    "before:git:release": ["git add --all"]
  }
};
