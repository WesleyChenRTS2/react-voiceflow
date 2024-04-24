import { FormPayload } from "./types";

const FormExtension = {
  name: "Custom_Form",
  type: "response",
  match: ({ trace }: FormPayload) => trace.type === "Custom_Form",
  render: ({ trace, element }: FormPayload) => {
    const formContainer = document.createElement("form");

    formContainer.innerHTML = `
      <style>
      label {
        font-size: 0.8em;
        color: #888;
      }
      input[type="text"], input[type="email"], input[type="tel"] {
        width: 100%;
        border: none;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
        background: transparent;
        margin: 5px 0;
        outline: none;
      }
      .phone {
        width: 150px;
      }
      .invalid {
        border-color: red;
      }
      .submit {
        background: linear-gradient(to right, #2e6ee1, #2e7ff1 );
        border: none;
        color: white;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
        cursor: pointer;
      }
    </style>
      <div class="form-group">
      <label for="email">Email:</label>
      <input value="${
        trace.payload.userEmail || ""
      }" type="email" class="form-control email" name="email"><br><br>
      </div>
      <div class="form-group">
      <label for="phone">Phone Number:</label>
      <input value="${
        trace.payload.userPhone || ""
      }" type="tel" class="form-control phone" name="phone"><br><br>
      <input type="submit" class="submit" value="Submit">
      `;

    formContainer.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = (formContainer.querySelector(".email") as HTMLInputElement)
        .value;
      const phone = (formContainer.querySelector(".phone") as HTMLInputElement)
        .value;

      formContainer.querySelector(".submit")?.remove();

      window.voiceflow.chat.interact({
        type: "complete",
        payload: { email, phone },
      });
    });

    element.appendChild(formContainer);
  },
};

export default FormExtension;
