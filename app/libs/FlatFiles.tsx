import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
// import { getAllMarkdownFiles, getMarkdownFile, findFilesInDir } from '@nodejs/utils/Files';

const postsDirectory = join(process.cwd(), '_posts')

export function getMarkdownFormatPostBySlug(slug: any, fields: string[] = []) {
  // const fileFound = findFilesInDir(postsDirectory, slug);
  // if(!fileFound || fileFound.length === 0) {
  //   return '';
  // }

  // const post = getMarkdownFile(fileFound[0], fields);
  // return post
}

export function getAllMarkdownFormatPosts(fields: string[] = []) {
  // const posts = getAllMarkdownFiles(postsDirectory, fields);
  // return posts
}
