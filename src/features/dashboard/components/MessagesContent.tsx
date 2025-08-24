import { MessagesDataTable } from "@/components/data-table-messages-list";
import { SiteHeader } from "@/components/site-header";
import { schema, TableCellViewer } from "@/components/data-table-listing";

import data from "./../pages/data.json";
import { ColumnDef } from "@tanstack/react-table";
import { useSortable } from "@dnd-kit/sortable";
import { Button } from "@/components/ui/button";
import {
  IconCircleCheckFilled,
  IconDotsVertical,
  IconGripVertical,
  IconLoader,
} from "@tabler/icons-react";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown } from "lucide-react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MessagesContent = () => {
  function DragHandle({ id }: { id: number }) {
    const { attributes, listeners } = useSortable({
      id,
    });

    return (
      <Button
        {...attributes}
        {...listeners}
        variant="ghost"
        size="icon"
        className="text-muted-foreground size-7 hover:bg-transparent"
      >
        <IconGripVertical className="text-muted-foreground size-3" />
        <span className="sr-only">Drag to reorder</span>
      </Button>
    );
  }

  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      id: "drag",
      header: () => null,
      cell: ({ row }) => <DragHandle id={row.original.id} />,
    },
    {
      id: "select",
      header: ({ table }) => (
        <div className="flex items-center justify-center">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "from",
      header: "From",
      cell: ({ row }) => {
        return <TableCellViewer item={row.original} />;
      },
      enableHiding: false,
    },
    {
      accessorKey: "to",
      header: "To",
      cell: ({ row }) => (
        <div className="w-32">
          <Badge variant="outline" className="text-muted-foreground px-1.5">
            {row.original.type}
          </Badge>
        </div>
      ),
    },
    {
      accessorKey: "message-content",
      header: "Message Content",
      cell: ({ row }) => (
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          {row.original.status === "Done" ? (
            <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
          ) : (
            <IconLoader />
          )}
          {row.original.status}
        </Badge>
      ),
    },

    {
      accessorKey: "sent-at",
      header: "Sent at",
      cell: ({ row }) => (
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          {row.original.status === "Done" ? (
            <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
          ) : (
            <IconLoader />
          )}
          {row.original.status}
        </Badge>
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => {
              console.log("Sorting got clicked!!!", column);

              column.toggleSorting(column.getIsSorted() === "asc");
            }}
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },

      cell: ({ row }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
              loading: `Saving ${row.original.header}`,
              success: "Done",
              error: "Error",
            });
          }}
        >
          <Label htmlFor={`${row.original.id}-target`} className="sr-only">
            Target
          </Label>
          <Input
            className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-16 border-transparent bg-transparent text-right shadow-none focus-visible:border dark:bg-transparent"
            defaultValue={row.original.target}
            id={`${row.original.id}-target`}
          />
        </form>
      ),
    },

    {
      id: "actions",
      cell: () => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
              size="icon"
            >
              <IconDotsVertical />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Make a copy</DropdownMenuItem>
            <DropdownMenuItem>Favorite</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const title = "Messages Management";

  return (
    <div>
      {" "}
      <SiteHeader title={title} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className=" text-3xl font-medium lg:px-6">Messages</div>
            <div className="px-4 lg:px-6">
              Monitor message logs and manage flagged content to maintain
              platform integrity.
            </div>
            <MessagesDataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;
