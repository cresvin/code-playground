import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function outputHtmlTemplate(
  html: string,
  filenames: { cssFilename: string; jsFilename: string }
) {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="${filenames.cssFilename}" />
<title>My exported project ⚡</title>
</head>

<body>
${html}
<script src="${filenames.jsFilename}"></script>
</body>

</html>
`.trimStart();
}
