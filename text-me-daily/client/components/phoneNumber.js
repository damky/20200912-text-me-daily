import Axios from "axios"
import Btn from "./utils/btn";
import Modal from "./utils/modal";
import Section from "./section"
import useUser from "./utils/customHooks/useUser"
import Subscription from "./subscription"


export default function PhoneNumber({ serverUrl, locstor }) {
  const user = useUser('phone');
  const allSubscriptions = Axios.get(`${serverUrl}/api/subscriptions`, { headers: { 'authorization': locstor.token } }).then(res => res.data);
  const userPhone = user.phone;
  const userSubs = user.subscriptions
    ? user.subscriptions.map((sub, idx) =>
      <Subscription
        onClick={editScheduleTime}
        key={`sub${idx}`}
        subName={sub.name}
        subSchedule={sub.scheduleTime}
      />)
    : <p>no subscriptions</p>;

  const editScheduleTime = () => {

  }

  const addSubscription = () => {

  }

  const removeSubscription = () => {

  }

  return (
    <Section headline='subscriptions'>
      {userPhone && <h4 className="phone">{userPhone}</h4>}
      {userSubs ? userSubs : <p>No phone number was found. Create one now.</p>}

      <Modal pop headline='add subscription' trigger='add subscription'>
        {/* {allSubscriptions.filter(allSub => user.subscriptions.some(userSub => allSub.name !== userSub.name)).map((sub, idx) => <Btn onClick={() => addSubscription} key={idx}>{sub.name}</Btn>)} */}
        <span>hello</span>
      </Modal>
      <Modal pop headline='remove subscription' trigger='remove subscription'>
        {/* {allSubscriptions.filter(allSub => user.subscriptions.some(userSub => allSub.name === userSub.name)).map((sub, idx) => <Btn onClick={() => removeSubscription} key={idx}>{sub.name}</Btn>)} */}
        <span>goodbye</span>
      </Modal>
    </Section>
  )
}