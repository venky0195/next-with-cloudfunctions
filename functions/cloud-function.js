export default function handler(_, res) {
  res
    .status(200)
    .json({ deploymentIdentifier: "contentfly-deployment-agent-dev-deploy:3041fcdabf20:run-counter-2" })
}