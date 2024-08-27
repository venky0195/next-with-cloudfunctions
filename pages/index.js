export const Home = () => {
  const envVariable = process.env.NEXT_PUBLIC_TEST_VARIABLE;

  return (
    <div >
      {envVariable === "TEST_VALUE" && <p>contentfly-deployment-agent-dev-deploy:3041fcdabf20:run-counter-2</p>}
    </div>
  )
}
export default Home
