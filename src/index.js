import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import PassCallbackasProps from "./pass-callback-as-props";
import LifeCycleMethodsDate from "./lifecycle-method";
import FormElement from "./formElement";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PassCallbackasProps />
    <LifeCycleMethodsDate />
    <FormElement />
  </StrictMode>
);
