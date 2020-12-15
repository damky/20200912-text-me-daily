import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import styles from "../styles/subscription.module.scss";
// import Btn from "./utils/btn";
import Modal from "./utils/modal";
import Btn from "./utils/btn";

export default function Subscription({ sub }) {
  const submitData = (values) => {
    const scheduledValueBool = values.scheduledOrRandom === "scheduled"
      ? true
      : values.scheduledOrRandom === "random"
        ? false
        : sub.scheduled;
    const scheduledAmPmValueBool = values.scheduledTimeAmPm === "am"
      ? true
      : values.scheduledTimeAmPm === "pm"
        ? false
        : sub.scheduledTimeAm;

    const data = {
      name: sub.name,
      scheduled: sub.scheduled === scheduledValueBool ? sub.scheduled : scheduledValueBool,
      scheduledTimeHr: sub.scheduledTimeHr === values.scheduledTimeHr ? sub.scheduledTimeHr : values.scheduledTimeHr,
      scheduledTimeMin: sub.scheduledTimeMin === values.scheduledTimeMin ? sub.scheduledTimeMin : values.scheduledTimeMin,
      scheduledTimeAm: sub.scheduledTimeAm === scheduledAmPmValueBool ? sub.scheduledTimeAm : scheduledAmPmValueBool,
    }
    console.log(data);

  }

  return (
    <div
      className={styles.subscription}
    >
      <h5>{sub.name}</h5>
      <div >
        <span
          className="schedule"
        >{`${sub.scheduledTimeHr}:${sub.scheduledTimeMin} ${sub.scheduledTimeAm ? "am" : "pm"}`}</span>

        <Formik
          initialValues={
            {
              scheduledOrRandom: "choose",
              scheduledTimeHr: sub.scheduledTimeHr,
              scheduledTimeMin: sub.scheduledTimeMin,
              scheduledTimeAmPm: sub.scheduledTimeAm ? "scheduledTimeAm" : "scheduledTimePm"
            }
          }
          validateOnChange={true}
          validate={values => {
            const errors = {}
            if (values.scheduledOrRandom === "choose") {
              errors.scheduledOrRandom = "please choose"
            }
            return errors
          }}
          onSubmit={
            async (values) => {
              await new Promise(r => setTimeout(r, 3000));
              submitData(values);
            }
          }
        >
          {({ errors, touched, submitCount, isValid, isSubmitting, values, handleReset }) =>
            <Form>
              <Modal
                pop
                headline='schedule it'
                trigger={
                  <span
                    className={styles.edit}
                  >edit</span>
                }
                submit={
                  !errors.scheduledOrRandom
                  && values.scheduledOrRandom !== "choose"
                  && submitCount === 0
                  && !isSubmitting
                  && <Btn submit primary>save</Btn>
                  || !errors.scheduledOrRandom
                  && values.scheduledOrRandom !== "choose"
                  && submitCount > 0
                  && !isSubmitting
                  && <Btn onClick={handleReset} primary>change</Btn>
                  || <Btn submit disabled primary>save</Btn>
                }
                closeBtn
                disabled={
                  document.querySelector('[name="scheduledOrRandom"]')?.value === "scheduled"
                    || document.querySelector('[name="scheduledOrRandom"]')?.value === "random"
                    ? false
                    : true
                }
                submitCount={submitCount}
                isSubmitting={isSubmitting}
              >
                <label>
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
                {values.scheduledOrRandom === "scheduled"
                  && <div
                    className={[styles.scheduledTime].join(' ')}
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
                    <label
                      htmlFor="scheduledTimeMin"
                      className={styles.column}
                    >
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