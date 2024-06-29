import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import * as marked from 'marked';

export const prerender = true;

export async function load() {
    const directory = path.join(process.cwd(), 'src/lib/stories');
    const filenames = fs.readdirSync(directory).filter(filename => filename.endsWith('.md'));

    const files = await Promise.all(filenames.map( async filename => {
        const filePath = path.join(directory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        const htmlContent = await marked.parse(content);

        return {
            filename,
            data,
            content: htmlContent
        };
    }));

    files.reverse();

    return {
        stories: files
    };
}