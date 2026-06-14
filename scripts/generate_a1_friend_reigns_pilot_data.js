const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const lingoRoot = path.resolve(repoRoot, '..');
const prototypeRoot = path.resolve(repoRoot, 'a1-friend-reigns-pilot');
const outputRoot = path.join(prototypeRoot, 'scenario_packs', 'current_flow');
const manifestPath = path.join(prototypeRoot, 'scenario_manifest.v1.json');

const languages = ['ko', 'ja', 'en', 'th', 'es', 'fr', 'de', 'it', 'zh', 'pt'];
const languageLabels = {
  ko: 'Korean',
  ja: 'Japanese',
  en: 'English',
  th: 'Thai',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  it: 'Italian',
  zh: 'Chinese',
  pt: 'Portuguese',
};

const a1SourceDirs = {
  ko: [
    ['content-ko', 'content', 'core', 'content_assets', 'scenario_packs', 'current_flow', 'a1', 'scenario_packs'],
    ['content-ko', 'content_v2', 'inventory', 'content_assets', 'dialogue', 'current_flow', 'a1_friend_reigns', 'scenario_packs'],
  ],
  ja: [['content-ja', 'content', 'review', 'current_flow', 'scenario_pack.v1', 'ja']],
  en: [['content-en', 'curriculum', 'a1_travel_v1', 'staging', 'scenario_pack.v1']],
  th: [['content-th', 'content', 'core', 'content_assets', 'scenario_packs', 'current_flow']],
  es: [['content-es', 'content', 'core', 'content_assets', 'scenario_packs', 'current_flow']],
  fr: [['content-fr', 'content', 'core', 'content_assets', 'scenario_packs', 'current_flow']],
  de: [['content-de', 'content', 'core', 'content_assets', 'scenario_packs', 'current_flow']],
  it: [['content-it', 'content', 'core', 'content_assets', 'scenario_packs', 'current_flow']],
  zh: [['content-zh', 'content', 'core', 'content_assets', 'scenario_packs', 'current_flow']],
  pt: [['content-pt', 'content', 'core', 'content_assets', 'scenario_packs', 'current_flow']],
};

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function listJsonFiles(dir, lang) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((name) => name.endsWith(`.${lang}.v1.json`))
    .map((name) => path.join(dir, name))
    .sort();
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function sourceStatus(pack) {
  return pack.source_status || pack.review_status || pack.review_state || '';
}

function collectPacks() {
  const entries = [];
  const seen = new Set();

  for (const lang of languages) {
    for (const dirParts of a1SourceDirs[lang]) {
      const a1Dir = path.join(lingoRoot, ...dirParts);
      for (const sourcePath of listJsonFiles(a1Dir, lang)) {
        const pack = readJson(sourcePath);
        addPack(entries, seen, 'a1', lang, sourcePath, pack);
      }
    }

    const a2Dir = path.join(
      lingoRoot,
      `content-${lang}`,
      'content',
      'core',
      'content_assets',
      'scenario_packs',
      'current_flow',
      'a2'
    );
    for (const sourcePath of listJsonFiles(a2Dir, lang)) {
      const pack = readJson(sourcePath);
      addPack(entries, seen, 'a2', lang, sourcePath, pack);
    }
  }

  return entries.sort((a, b) => (
    a.level.localeCompare(b.level) ||
    a.language.localeCompare(b.language) ||
    a.scenario_id.localeCompare(b.scenario_id)
  ));
}

function addPack(entries, seen, level, lang, sourcePath, pack) {
  if (!pack || !pack.scenario_id || !Array.isArray(pack.turns)) return;
  const entryId = `${level}:${lang}:${pack.scenario_id}`;
  if (seen.has(entryId)) return;
  seen.add(entryId);

  const fileName = `${pack.scenario_id}.${lang}.v1.json`;
  const relPath = path.posix.join('scenario_packs', 'current_flow', level, lang, fileName);
  const outputPath = path.join(outputRoot, level, lang, fileName);
  ensureDir(path.dirname(outputPath));
  writeJson(outputPath, pack);

  entries.push({
    entry_id: entryId,
    scenario_id: pack.scenario_id,
    level,
    language: lang,
    language_label: languageLabels[lang],
    label: pack.title || pack.scenario_id,
    setting_label: pack.setting_label || '',
    source_status: sourceStatus(pack),
    turns: pack.turns.length,
    path: relPath,
    source_repo: `content-${lang}`,
    source_file: path.relative(path.join(lingoRoot, `content-${lang}`), sourcePath).replace(/\\/g, '/'),
  });
}

function summarize(entries) {
  const byLevel = {};
  const byLanguage = {};
  for (const entry of entries) {
    byLevel[entry.level] = (byLevel[entry.level] || 0) + 1;
    byLanguage[entry.language] = (byLanguage[entry.language] || 0) + 1;
  }
  return { total: entries.length, by_level: byLevel, by_language: byLanguage };
}

if (fs.existsSync(outputRoot)) {
  fs.rmSync(outputRoot, { recursive: true, force: true });
}
ensureDir(outputRoot);

const scenarios = collectPacks();
const manifest = {
  schema_version: 'scenario_manifest.v1',
  generated_at: new Date().toISOString(),
  default_scenario_id: 'a1:ko:travel_hotel_checkin',
  default_entry_id: 'a1:ko:travel_hotel_checkin',
  scenarios,
  summary: summarize(scenarios),
};

writeJson(manifestPath, manifest);
console.log(JSON.stringify(manifest.summary, null, 2));
