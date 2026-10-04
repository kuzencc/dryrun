export default function Dashboard () {
  const data = [
    {title: "Total Records", value: "0"},
    {title: "Total Users", value: "0"},
    {title: "Records Added Today", value: "0"},
    {title: "Pending Items", value: "0"},
    {title: "Last Updated", value: "0"},        
  ]
  return(
    <div className="Dashboard-Layout">
      <div className="Dashboard-Title">
        <h1>Dashboard</h1>
        <p>Welcome to your monitoring system</p>
      </div>
      <div className="Dashboard-Cards">
        {data.map((data) => (
          <div className="Card" key={data.title}>
          <h3>{data.title}</h3>
          <p>{data.value}</p>
        </div>
        ))}
      </div>
    </div>
  )
}