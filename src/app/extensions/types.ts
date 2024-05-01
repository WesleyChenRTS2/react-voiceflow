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

export type { Payload, FormPayload };
