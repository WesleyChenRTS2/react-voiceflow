import { CalendarPayload } from "./types";

interface DayMap {
  [key: string]: number;
}

const CalendarExtension = {
  name: "Calendar",
  type: "response",
  match: ({ trace }: CalendarPayload) => trace.type === "Calendar",
  render: ({ trace, element }: CalendarPayload) => {
    const calendarContainer = document.createElement("div");

    const styles = document.createElement("style");
    styles.innerHTML = `

    .ranges {
      color: #10ac74;
      font-weight: bold;
    }
    .ranges.selected, .ranges.selected:hover {
      background-color: #10ac74;
      font-weight: bold;
      color: white;
    }
      .selected {
        background-color: rgb(242, 255, 250);
        color: black;
      }

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

    .submit:disabled {
      cursor: default;
      background: #808080 !important;
      color: white;
    }

    button.cancel {
      background: white;
      color: #2E7FF1;
    }`;

    const dayMap: DayMap = {
      Sunday: 0,
      Saturday: 6,
      Friday: 5,
      Thursday: 4,
    };

    calendarContainer.append(styles);

    const calendarDiv = document.createElement("div");

    calendarDiv.setAttribute("id", "calendar");

    calendarContainer.appendChild(calendarDiv);

    // @ts-ignore
    const datepicker = new Datepicker(calendarDiv, {
      // @ts-ignore
      datesDisabled: function (date, viewId, rangeEnd) {
        let dateDisabled = true;
        trace.payload.dates?.forEach((d) => {
          const startDate = new Date(d.start);
          const endDate = new Date(d.end);
          if (
            date.getTime() <= endDate.getTime() &&
            date.getTime() >= startDate.getTime()
          ) {
            dateDisabled = false;
          }
        });
        return dateDisabled;
      },
      maxNumberOfDates: trace.payload.disableButtons ? 0 : 7,
      defaultViewDate:
        trace.payload.startDate && trace.payload.startDate !== "null"
          ? trace.payload.startDate.replaceAll("-", "/")
          : new Date(),
      // @ts-ignore
      beforeShowDay: function (date) {
        if (date.getDay() === dayMap[trace.payload.checkInDay || "noDate"]) {
          return {
            classes: "ranges",
          };
        }
      },
    });

    element.append(calendarContainer);

    if (!trace.payload.disableButtons) {
    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.className = "submit";
    submitBtn.disabled = true;

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = "Cancel";
    cancelBtn.className = "cancel";

    btnContainer.append(submitBtn, cancelBtn);

    element.append(btnContainer);

    submitBtn.addEventListener("click", function () {
      submitBtn.remove();
      cancelBtn.remove();
      window.voiceflow.chat.interact({
        type: "Response_Submitted",
        payload: {
          dates: [
            datepicker.getDate()[0],
            datepicker.getDate()[datepicker.getDate().length - 1],
          ],
        },
      });
    });

    cancelBtn.addEventListener("click", function () {
      submitBtn.remove();
      cancelBtn.remove();
      window.voiceflow.chat.interact({
        type: "Cancel",
      });
    });

    //@ts-ignore
    const getDates = function (startDate, endDate) {
      const dates = [];
      let currentDate = startDate;
      //@ts-ignore
      const addDays = function (days) {
        //@ts-ignore
        const date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
      while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
      }
      return dates;
    };
    //@ts-ignore
    datepicker.element.addEventListener("changeDate", (e) => {
      const dateRange = trace.payload.dates?.find((d) => {
        return (
          e.detail.viewDate.getTime() >= new Date(d.start).getTime() &&
          e.detail.viewDate.getTime() <= new Date(d.end)
        );
      });
      const dates = getDates(
        //@ts-ignore
        new Date(dateRange?.start),
        //@ts-ignore
        new Date(dateRange?.end)
      );
      datepicker.setDate(dates, { clear: true });
      if (datepicker.getDate().length === 0) {
        submitBtn.disabled = true;
      } else {
        submitBtn.disabled = false;
      }
    });
    }
  },
};

export default CalendarExtension;
