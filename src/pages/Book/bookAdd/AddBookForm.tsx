/* eslint-disable @typescript-eslint/ban-ts-comment */
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
import { useAddBookMutation } from "@/redux/api/bookApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  author: z.string().min(1, { message: "Author is required." }),
  genre: z.string().min(1, {
    message: "FICTION | NON_FICTION | SCIENCE | HISTORY | BIOGRAPHY | FANTASY",
  }),
  isbn: z.string().min(1, { message: "ISBN is required." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  copies: z.number().min(0, { message: "Copies must be 0 or more." }),
  available: z.boolean().optional(),
});

const AddBookForm = () => {
  const [addBook, { isLoading }] = useAddBookMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 0,
      available: true, // Default to available
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await addBook(values);
    if (res.error) {
      let errorMessage = "Failed to add book.";
      if ("data" in (res.error ?? {})) {
        // @ts-ignore
        errorMessage = res.error.data?.error?.message || errorMessage;
      } else if ("message" in (res.error ?? {})) {
        // @ts-ignore
        errorMessage = res.error.message || errorMessage;
      }

      toast.error(errorMessage);
    } else {
      toast.success("Book added successfully");
      form.reset();
      navigate("/books");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

        {/* Available Checkbox */}
        {/* <FormField
          control={form.control}
          name="available"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="m-0">Available</FormLabel>
            </FormItem>
          )}
        /> */}

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

export default AddBookForm;
