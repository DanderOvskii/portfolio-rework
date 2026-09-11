
import { extractFilename } from "@/utils/helpers";

export async function uploadImage(file: File) {
  const res = await fetch("/api/v1/uploads", {
    method: "POST",
    body: file,
    headers: {
      'Content-Type': file.type,
      'X-Filename': file.name,
      'Content-Length': file.size.toString(),
    }
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || "Upload failed");
  return res.json() as Promise<{ path: string }>;
}

export async function deleteImage(imagePath: string) {
  const filename = extractFilename(imagePath);
  console.log("filename",filename)
  const res = await fetch("/api/v1/uploads", {
    method: "DELETE",
    headers: { "X-Filename": filename }
  });
  if (!res.ok) {
    throw new Error((await res.json().catch(() => ({}))).message || "Delete failed");
  }
  return res.json() as Promise<{ deleted: boolean }>;
}