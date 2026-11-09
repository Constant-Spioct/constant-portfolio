// Client-side validation only; this form does not deliver messages.
const contactForm = document.querySelector("#contact-form");
const contactFeedback = document.querySelector("#contact-feedback");

const validationRules = {
  name: {
    input: document.querySelector("#contact-name"),
    error: document.querySelector("#name-error"),
    validate: (value) => value.trim() ? "" : "Please enter your full name."
  },
  email: {
    input: document.querySelector("#contact-email"),
    error: document.querySelector("#email-error"),
    validate: (value, input) => {
      if (!value.trim()) return "Please enter your email address.";
      return input.validity.typeMismatch ? "Enter an email address in a valid format, such as name@example.com." : "";
    }
  },
  phone: {
    input: document.querySelector("#contact-phone"),
    error: document.querySelector("#phone-error"),
    validate: (value) => {
      if (!value.trim()) return "Please enter your phone number.";
      return /^\d+$/.test(value.trim()) ? "" : "Use digits only, with no spaces or symbols.";
    }
  },
  message: {
    input: document.querySelector("#contact-message"),
    error: document.querySelector("#message-error"),
    validate: (value) => value.trim() ? "" : "Please write a message."
  }
};

Object.values(validationRules).forEach(({ input, error }) => {
  input.addEventListener("input", () => {
    error.textContent = "";
    input.removeAttribute("aria-invalid");
    contactFeedback.textContent = "";
    contactFeedback.className = "form-feedback";
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let firstInvalidInput = null;
  let isValid = true;

  Object.values(validationRules).forEach(({ input, error, validate }) => {
    const validationMessage = validate(input.value, input);
    error.textContent = validationMessage;
    if (validationMessage) {
      isValid = false;
      input.setAttribute("aria-invalid", "true");
      if (!firstInvalidInput) firstInvalidInput = input;
    } else {
      input.removeAttribute("aria-invalid");
    }
  });

  if (!isValid) {
    contactFeedback.textContent = "Please correct the highlighted fields and try again.";
    contactFeedback.className = "form-feedback is-error";
    firstInvalidInput.focus();
    return;
  }

  contactFeedback.textContent = "Your details passed validation. This demonstration does not send or store your message.";
  contactFeedback.className = "form-feedback is-success";
  contactForm.reset();
});
