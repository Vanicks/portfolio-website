import { join, dirname } from "node:path";
import { mkdir, copyFile } from "node:fs/promises";

export default async function processImage(options: ImageProcessorOptions): Promise<ProcessedImage> {
  const root = process.cwd();
  const blogsPath = join(root, 'src/content/blog/');
  
  const directory = options.slug;

  const filePath = `/${options.banner}`;
  const imagePath = join(blogsPath, directory + filePath);

  let src = join(directory, filePath);
  const target = join(process.cwd(), ("public"), 'blogs', src);
  const targetDir = dirname(target);

  await mkdir(targetDir, {recursive: true});
  await copyFile(imagePath, target);

  return {
    src: '/' + join('blogs', src),
  };
}

type ProcessedImage = {
  src: string;
}

type ImageProcessorOptions = {
  banner?: string;
  slug: string;
}