const fs = require('fs/promises')
const path = require('path')

const projectRoot = process.cwd()
const outDir = path.join(projectRoot, 'out')

const assets = ['SBR-logo.png', 'SBR-logo-Light.png']

async function exists(targetPath) {
  try {
    await fs.access(targetPath)
    return true
  } catch {
    return false
  }
}

async function collectRouteDirs(dir) {
  const dirs = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  const hasIndex = entries.some((entry) => entry.isFile() && entry.name === 'index.html')
  if (hasIndex) {
    dirs.push(dir)
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (entry.name === '_next') continue
    dirs.push(...(await collectRouteDirs(path.join(dir, entry.name))))
  }

  return dirs
}

async function main() {
  if (!(await exists(outDir))) return

  const routeDirs = await collectRouteDirs(outDir)

  for (const routeDir of routeDirs) {
    for (const asset of assets) {
      const source = path.join(outDir, asset)
      const destination = path.join(routeDir, asset)
      if (source === destination) continue
      if (!(await exists(source))) continue
      await fs.copyFile(source, destination)
    }
  }
}

main().catch((error) => {
  console.error('Failed to sync export assets:', error)
  process.exit(1)
})
