import { InstallmentCreditView } from "./views/installment-credit/installment-credit.view";
import { InstallmentPixView } from "./views/installment-pix/installment-pix.view";
import { PaymentMethodView } from "./views/payment-method/payment-method.view";

import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <PaymentMethodView></PaymentMethodView>,
    },
    {
      path: "/pix",
      element: <InstallmentPixView></InstallmentPixView>,
    },
    {
      path: "/credit",
      element: <InstallmentCreditView></InstallmentCreditView>,
    },
  ],
  {}
);

function App() {
  return (
    <div className="bg-black w-screen h-screen  flex justify-center items-center">
      <div className="max-w-[500px]  w-full h-full overflow-y-auto flex flex-col">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
