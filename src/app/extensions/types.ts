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

type VideoPayload = Payload<{src: string}>

export type { Payload, FormPayload, VideoPayload };
