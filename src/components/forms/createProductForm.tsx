import { useForm, type SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePostSchema } from "../../schema";
import { Button } from "../buttons/button";
import { ButtonLink } from "../buttons/buttonLink";
import { FileInput } from "./fileInput";
import { TextInput } from "./textInput";
import { TextAreaInput } from "./textareaInput";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <>
          <FileInput
            {...register("file")}
            label="File"
            placeholder="Select a file"
            id="file"
            name="file"
            className="!py-1.5 text-lg font-semibold"
          />
        </>
      </div>
      <div>
        <TextInput
          {...register("title")}
          label="Title"
          placeholder="Title"
          id="title"
          name="title"
          className="!py-1.5 text-lg font-semibold"
        />
      </div>
      <div className="mt-6">
        <TextAreaInput
          {...register("content")}
          id="content"
          label="Content"
          placeholder="Content"
          name="content"
        />
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
    </form>
  );
};
