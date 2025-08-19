"use client";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
export const InputFile = ({ value, onChange }) => {
  console.log("props value: ", value);
  console.log("props onChange: ", onChange);
  const handleDrop = (files: File[]) => {
    console.log(files);
    onChange(files);
  };
  return (
    <Dropzone
      accept={{ "image/*": [] }}
      onDrop={handleDrop}
      onError={console.error}
      src={value}
    >
      <DropzoneEmptyState />
      <DropzoneContent />
    </Dropzone>
  );
};
export default InputFile;
