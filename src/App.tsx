import { InstallmentPixView } from "./views/installment-pix/installment-pix.view";
import { PaymentMethodView } from "./views/payment-method/payment-method.view";

function App() {
  return (
    <div className="bg-black w-screen h-screen  flex justify-center items-center">
      <div className="max-w-[500px]  w-full h-full">
        {/* <PaymentMethodView></PaymentMethodView> */}

        <InstallmentPixView></InstallmentPixView>
      </div>
    </div>
  );
}

export default App;
