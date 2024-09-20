import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const packagePath = path.join(__dirname, '..', 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))

console.log(`Publishing unscoped package version ${packageJson.version}...`)
execSync('npm publish', { stdio: 'inherit' })

console.log('Package published successfully!')
