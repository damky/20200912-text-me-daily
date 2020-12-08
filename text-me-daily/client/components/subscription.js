import styles from "../styles/subscription.module.scss";
import Btn from "./utils/btn";
import Modal from "./utils/modal";


export default function Subscription({ subName, subSchedule, saveEditTime }) {
  return (
    <div className={styles.subscription}>
      <h5>{subName}</h5>
      <div >
        <span className="schedule">{subSchedule}</span>

        <Modal pop headline='schedule it' trigger={<span className={styles.edit}>edit</span>} closeBtn={<Btn primary onClick={saveEditTime}>save</Btn>}>
          <div>
            <div className="time">
              <div className="scheduledTime">
                <input type="radio" name="scheduledTimeCheckbox" id="scheduledTime" />
                <input type="time" name="scheduledTimeDateTime" id="scheduledTimeDateTime" />
              </div>
              <div className="randomTime">
                <input type="radio" name="scheduledTimeCheckbox" id="randomTime" />
                <span className="randomTimeText">random</span>
              </div>
            </div>
            {/* <Btn primary onClick={saveEditTime}>save</Btn> */}
          </div>

        </Modal>

      </div>
    </div>
  )
}