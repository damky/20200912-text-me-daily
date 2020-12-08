import Axios from "axios"
import Btn from "./utils/btn";
import Modal from "./utils/modal";
import Section from "./section"
import useUser from "./utils/customHooks/useUser"
import Subscription from "./subscription"


export default function PhoneNumber({ serverUrl, locstor }) {
  const user = useUser();
  // const allSubscriptions = Axios.get(`${serverUrl}/api/subscriptions`, { headers: { 'authorization': locstor.token } }).then(res => res.data);
  const editScheduleTime = () => {
    alert('clicked');
  }

  const addSubscription = () => {

  }

  const removeSubscription = () => {

  }

  const userPhone = user?.phone;
  const userSubs = user?.subscriptions
    ? user.subscriptions.map((sub, idx) =>
      <Subscription
        key={`sub${idx}`}
        subName={sub.name}
        subSchedule={sub.scheduleTime}
        saveEditTime={editScheduleTime}
      />)
    : <p>no subscriptions</p>;



  return (
    <Section headline='subscriptions'>
      {userPhone && <h4 className="phone">{`(${userPhone.slice(0, 3)}) ${userPhone.slice(3, 6)}-${userPhone.slice(6)}`}</h4>}
      {userSubs ? userSubs : <p>No phone number was found. Create one now.</p>}

      <Modal pop headline='add subscription' trigger='add subscription' primary>
        {/* {allSubscriptions.filter(allSub => user.subscriptions.some(userSub => allSub.name !== userSub.name)).map((sub, idx) => <Btn onClick={() => addSubscription} key={idx}>{sub.name}</Btn>)} */}
        <span>hello</span>
      </Modal>
      <Modal pop headline='remove subscription' trigger='remove subscription' primary>
        {/* {allSubscriptions.filter(allSub => user.subscriptions.some(userSub => allSub.name === userSub.name)).map((sub, idx) => <Btn onClick={() => removeSubscription} key={idx}>{sub.name}</Btn>)} */}
        <span>goodbye</span>
      </Modal>
    </Section>
  )
}