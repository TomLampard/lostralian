import { useForm, type SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProductSchema } from "@schema/index";
import { Button } from "@components/buttons/button";
import { ButtonLink } from "@components/buttons/buttonLink";
import { FileInput } from "@components/forms/fileInput";
import { TextInput } from "@components/forms/textInput";
import { NumberInput } from "@components/forms/numberInput";
import { RadioInput } from "@components/forms/radioInput";
import { TextAreaInput } from "@components/forms/textareaInput";

export type CreateProductType = z.infer<typeof CreateProductSchema>;

type CreateProductFormProps = {
  defaultValues?: CreateProductType;
  isSubmitting: boolean;
  backTo: string;
  onSubmit: SubmitHandler<CreateProductType>;
};

export const CreateProductForm = ({
  defaultValues,
  isSubmitting,
  backTo,
  onSubmit,
}: CreateProductFormProps) => {
  const { handleSubmit, register, reset, getValues, formState } =
    useForm({
      defaultValues,
      resolver: zodResolver(CreateProductSchema),
      mode: "all",
    });


  const { isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(getValues());
    }
  }, [isSubmitSuccessful, reset, getValues]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
      <div>
        <>
          <FileInput
            {...register("images")}
            type="file"
            label="Product Images"
            placeholder="Select a Product Image"
            id="file"
            name="file"
            className="!py-1.5 text-lg font-semibold"
          />
        </>
      </div>
      <div>
        <TextInput
          {...register("title")}
          type="text"
          label="Title"
          placeholder="Title"
          id="title"
          name="title"
          className="!py-1.5 text-lg font-semibold"
        />
      </div>
      <div className="mt-6">
        <TextAreaInput
          {...register("description")}
          id="content"
          label="Content"
          placeholder="Content"
          name="content"
        />
      </div>
      <div>
        <NumberInput 
          {...register("price")}
          type="number"
          label="Price"
          placeholder="Price"
          id="price"
          name="price"
        />
      </div>
      <div>
        <p>Size Options Available</p>
        <div className="flex items-center justify-between gap-4">
          <RadioInput 
            {...register("sizes")}
            type="radio"
            label="Size 'XXS'"
            id="sizes"
            name="sizes"
            value="XXS"
          />
          <RadioInput 
            {...register("sizes")}
            type="radio"
            label="Size 'XS'"
            id="sizes"
            name="sizes"
            value="XS"
          />
          <RadioInput 
            {...register("sizes")}
            type="radio"
            label="Size 'S'"
            id="sizes"
            name="sizes"
            value="S"
          />
          <RadioInput 
            {...register("sizes")}
            type="radio"
            label="Size 'M'"
            id="sizes"
            name="sizes"
            value="M"            
          />
          <RadioInput 
            {...register("sizes")}
            type="radio"
            label="Size 'L'"
            id="sizes"
            name="sizes"
            value="L"
          />
          <RadioInput 
            {...register("sizes")}
            type="radio"
            label="Size 'XL'"
            id="sizes"
            name="sizes"
            value="XL"
          />
          <RadioInput 
            {...register("sizes")}
            type="radio"
            label="Size 'XXL'"
            id="sizes"
            name="sizes"
            value="XXL"
          />
          <RadioInput 
            {...register("sizes")}
            type="radio"
            label="Size 'XXXL'"
            id="sizes"
            name="sizes"
            value="XXXL"
          />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-4">
          <Button
            type="submit"
            isLoading={isSubmitting}
            loadingChildren={`${
              isSubmitting ? "Creating post..." : "Create post"
            }`}
          >
            {isSubmitting ? "Saving" : "Post"}
          </Button>
          <ButtonLink href={backTo} variant="secondary">
            Cancel
          </ButtonLink>
        </div>
      </div>
      </div>
    </form>
  );
};
