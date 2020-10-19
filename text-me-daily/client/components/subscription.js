export default function Subscription({ subName, subSchedule }) {

  return (
    <div>
      <h5>{subName}</h5>
      <div >
        <span className="schedule">{subSchedule}</span>
        <span className="edit">edit</span>
      </div>
    </div>
  )
}