import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
  priceItemId: string | null;
}

export function useController() {
  const form = useForm<FormData>({
    defaultValues: {
      priceItemId: null,
    },
  });

  const [priceItemId] = form.watch(["priceItemId"]);

  const navigate = useNavigate();

  const handleValidSubmit = (data: FormData) => {
    navigate("/pix", { state: { priceItemId: data.priceItemId } });
  };

  const submitForm = async () => {
    form.handleSubmit((data) => handleValidSubmit(data))();
  };

  return { form, submitForm, priceItemId };
}
