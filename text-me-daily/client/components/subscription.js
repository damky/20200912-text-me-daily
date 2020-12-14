import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from "../styles/subscription.module.scss";
// import Btn from "./utils/btn";
import Modal from "./utils/modal";
import { useFormik } from "formik";
import { useRef } from "react";

export default function Subscription({ subName, subSchedule }) {
  // const scheduledOrRandom = useRef(null);
  // const formik = useFormik({
  //   initialValues: {
  //     scheduledOrRandom: "choose",
  //     scheduledTimeHr: 9,
  //     scheduledTimeMin: 0,
  //     scheduledTimeAmPm: undefined

  //   },
  //   onSubmit: values => { alert(JSON.stringify(values, null, 2)); }

  // });
  // const scheduledOrRandomSchema = {

  // }
  return (
    <div
      className={styles.subscription}
    >
      <h5>{subName}</h5>
      <div >
        <span
          className="schedule"
        >{subSchedule}</span>

        <Formik
          initialValues={
            {
              scheduledOrRandom: "choose",
              scheduledTimeHr: "9",
              scheduledTimeMin: "00",
              scheduledTimeAmPm: "scheduledTimeAm"

            }
          }
          validate={values => {
            const errors = {}
            if (values.scheduledOrRandom === "choose") {
              errors.scheduledOrRandom = false
            } else {
              errors.scheduledOrRandom = true
            }
          }}
          onSubmit={
            values => { alert(JSON.stringify(values, null, 2)); }
          }
        >
          {({ errors, touched }) => <Form>
            <Modal
              pop
              headline='schedule it'
              trigger={
                <span
                  className={styles.edit}
                >edit</span>
              }
              submit='save'
              closeBtn
              disabled={
                document.querySelector('[name="scheduledOrRandom"]')?.value === "scheduled"
                  || document.querySelector('[name="scheduledOrRandom"]')?.value === "random"
                  ? false
                  : true
              }
            >
              <label htmlFor="scheduledOrRandom">
                <Field
                  as="select"
                  name="scheduledOrRandom"
                  id="scheduledOrRandom"
                // ref={scheduledOrRandom}
                // onChange={formik.handleChange}
                >
                  <option defaultValue disabled>choose</option>
                  <option value="scheduled">scheduled</option>
                  <option value="random">random</option>
                </Field>
              </label>
              {document.querySelector('[name="scheduledOrRandom"]')?.value === "scheduled"
                && <div
                  className={[styles.column, styles.scheduledTime].join(' ')}
                >
                  <label
                    htmlFor="scheduledTimeHr"
                    className={styles.column}
                  >
                    {/* <input
                      type="number"
                      name="scheduledTimeHr"
                      id="scheduledTimeHr"
                      min="1"
                      max="12"
                      onChange={formik.handleChange}
                      value={formik.values.scheduledTimeHr}
                    /> */}
                    <Field
                      as="select"
                      name="scheduledTimeHr"
                    >
                      <option value="1" >1</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                      <option value="4" >4</option>
                      <option value="5" >5</option>
                      <option value="6" >6</option>
                      <option value="7" >7</option>
                      <option value="8" >8</option>
                      <option value="9" >9</option>
                      <option value="10" >10</option>
                      <option value="11" >11</option>
                      <option value="12" >12</option>
                    </Field>
                    <p>hr</p>
                  </label>
                  <label htmlFor="scheduledTimeMin" className={styles.column}>
                    {/* <input
                      type="number"
                      name="scheduledTimeMin"
                      id="scheduledTimeMin"
                      min="0"
                      max="59"
                      onChange={formik.handleChange}
                      value={formik.values.scheduledTimeMin}
                    /> */}
                    <Field
                      as="select"
                      name="scheduledTimeMin"
                    >
                      <option value="00">00</option>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option value="45">45</option>
                    </Field>
                    <p>min</p>
                  </label>
                  <label htmlFor="scheduledTimeAmPm" className={styles.column}>
                    {/* <label>
                      <input
                        type="radio"
                        name="scheduledTimeAmPm"
                        id="scheduledTimeAm"
                        onChange={formik.handleChange}
                        value="scheduledTimeAm"
                      />
                    AM
                  </label>
                    <label>
                      <input
                        type="radio"
                        name="scheduledTimeAmPm"
                        id="scheduledTimePm"
                        onChange={formik.handleChange}
                        value="scheduledTimePm"
                      />
                    PM
                  </label> */}
                    <Field
                      as="select"
                      name="scheduledTimeAmPm"
                    >
                      <option value="am">am</option>
                      <option value="pm">pm</option>
                    </Field>
                  </label>
                </div>}


              {/* <Btn submit primary>save</Btn> */}

            </Modal>
          </Form>}
        </Formik>

      </div>
    </div>
  )
}