import { CalendarPayload } from "./types";

const CalendarExtension = {
  name: "Calendar",
  type: "response",
  match: ({ trace }: CalendarPayload) => trace.type === "Calendar",
  render: ({ trace, element }: CalendarPayload) => {
    const calendarContainer = document.createElement("div");

    const styles = document.createElement("style")
    styles.innerHTML = `
    .btn-container {
        display: flex;
        flex-direction: column;
    }
    .submit {
      margin-bottom: 0.5rem;
    }
    .submit, .cancel {
      background: linear-gradient(to right, #2e6ee1, #2e7ff1 );
      border: none;
      color: white;
      padding: 10px;
      border-radius: 5px;
      width: 100%;
      cursor: pointer;
    }

    button.cancel {
      background: white;
      color: #2E7FF1;
    }`

    calendarContainer.append(styles)

    const calendarDiv = document.createElement("div");

    calendarDiv.setAttribute("id", "calendar");

    calendarContainer.appendChild(calendarDiv);


    // @ts-ignore
    const datepicker = new Datepicker(calendarDiv, {
      // @ts-ignore
      datesDisabled: function (date, viewId, rangeEnd) {
        let dateDisabled = true;
        trace.payload.dates.forEach((d) => {
            const startDate = new Date(d.start);
            const endDate = new Date(d.end);
          if (
            (
              date.getTime() <= endDate.getTime() &&
              date.getTime() >= startDate.getTime()
            )
          ) {
            dateDisabled = false;
          }
        });
        return dateDisabled;
      },
      maxNumberOfDates: 2,
    });

    datepicker.element.addEventListener("changeDate", () => {
        if (datepicker.getDate().length !== 2) {
            submitBtn.disabled = true
        } else {
            submitBtn.disabled = false
        }
    })

    element.append(calendarContainer);

    const btnContainer = document.createElement('div')
    btnContainer.className = 'btn-container'

    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'Submit'
    submitBtn.className = 'submit'

    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel'
    cancelBtn.className = 'cancel'

    btnContainer.append(submitBtn, cancelBtn)

    element.append(btnContainer)

    submitBtn.addEventListener('click', function() {
        submitBtn.disabled = true;
        cancelBtn.disabled = true;
        window.voiceflow.chat.interact({
            type: "Response_Submitted",
            payload: {dates: datepicker.getDate()}
        })
    })

    cancelBtn.addEventListener('click', function() {
        submitBtn.disabled = true;
        cancelBtn.disabled = true;
        window.voiceflow.chat.interact({
            type: "Cancel",
          });
    })
  },
};

export default CalendarExtension;
