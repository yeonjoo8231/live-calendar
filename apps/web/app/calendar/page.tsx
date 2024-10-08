export default async function Page() {
  const result = await fetch('http://localhost:5555/calendar');
  const jsonDate = await result.json();
  console.log('result', jsonDate);

  return <div>calendar page</div>;
}
