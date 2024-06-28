interface Payload<T extends object> {
  trace: {
    payload: T;
    type?: string;
  };
  element: HTMLElement;
}

type FormPayload = Payload<{
    userEmail?: string;
    userPhone?: string
}>

type CalendarPayload = Payload<{
  dates: {start: Date, end: Date}[],
  disableButtons?: boolean,
  startDate?: string,
}>

type AvailabilityPayload = Payload<{
  availability: {start: string, end: string}[]
}>

export type { Payload, FormPayload, CalendarPayload, AvailabilityPayload };
