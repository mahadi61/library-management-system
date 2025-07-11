import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateBookMutation } from "@/redux/api/bookApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string().min(1, {
    message: "FICTION | NON_FICTION | SCIENCE | HISTORY | BIOGRAPHY | FANTASY",
  }),
  isbn: z.string(),
  description: z.string(),
  copies: z.number().min(0, { message: "Copies must be 0 or more." }),
  available: z.boolean().optional(),
});

const UpdateBook = ({ id }: { id: string }) => {
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      available: false,
    },
  });

  async function onSubmit(id: string, values: z.infer<typeof formSchema>) {
    const res = await updateBook({ id, ...values });
    if (res.error) {
      console.error("Failed to update book:", res.error);
      toast.error("Failed to update book");
    } else {
      toast.success("Book Updated successfully");
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => onSubmit(id, form.getValues()))}
        className="space-y-6"
      >
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g. The Lord of the Rings" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Author */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Robert C. Martin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Genre */}
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Fiction" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ISBN */}
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 9780132350884" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Brief summary of the book..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Copies */}
        <FormField
          control={form.control}
          name="copies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Copies</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-1/2 bg-green-500 text-white"
            disabled={isLoading}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateBook;
