import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

export default async function processImage(
  options: ImageProcessorOptions,
): Promise<ProcessedImage> {
  const root = process.cwd();
  const blogsPath = join(root, 'src/content/blog/');

  const directory = options.slug;

  const filePath = `/${options.banner}`;
  const imagePath = join(blogsPath, directory + filePath);

  const src = join(directory, filePath);
  const target = join(process.cwd(), 'public', 'blogs', src);
  const targetDir = dirname(target);

  await mkdir(targetDir, { recursive: true });
  await copyFile(imagePath, target);

  return {
    src: '/' + join('blogs', src),
  };
}

interface ProcessedImage {
  src: string;
};

interface ImageProcessorOptions {
  banner?: string;
  slug: string;
};
