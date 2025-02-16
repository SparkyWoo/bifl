import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { Category } from './types'

const CATEGORIES_DIR = path.join(process.cwd(), 'app/content/categories')

export async function getAllCategories(): Promise<Category[]> {
  const categoryFiles = fs.readdirSync(CATEGORIES_DIR)
    .filter(file => file.endsWith('.mdx'))

  const categories = await Promise.all(
    categoryFiles.map(async (fileName) => {
      const filePath = path.join(CATEGORIES_DIR, fileName)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      
      const { frontmatter } = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true }
      })

      return {
        ...frontmatter,
        id: fileName.replace('.mdx', '')
      } as Category
    })
  )

  return categories.sort((a, b) => a.title.localeCompare(b.title))
} 