export default function handler(_, res) {
  if (process.env.NEXT_PUBLIC_TEST_VARIABLE !== "TEST_VALUE") {
    throw new Error("Env variable not present");
  }

  res.setHeader('Set-Cookie', 'myCookie=myValue; Path=/; HttpOnly');
  res
    .status(200)
    .json({ deploymentIdentifier: "contentfly-deployment-agent-dev-deploy:3041fcdabf20:run-counter-2" })
}